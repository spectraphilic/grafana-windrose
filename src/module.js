import { MetricsPanelCtrl } from 'app/plugins/sdk';
import * as d3 from 'd3';

class WindroseCtrl extends MetricsPanelCtrl {

  constructor($scope, $injector) {
    super($scope, $injector);
    //this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('data-error', this.onDataError.bind(this));
  }

  onInitEditMode() {
    console.debug('init-edit-mode');
  }

  onDataError(err) {
    console.error('data-error', err);
  }

  // Helper function. Given a value and a sorted array, return the index where
  // the value would be inserted in order. The first element of the array
  // defines the minimum allowed value, the last element of the array defines
  // the maximum allowed value.
  getInsertIndex(value, array) {
    // Check value
    if (value === null) {
      console.debug('Unexpected value is null');
      return null;
    }

    // Below lower limit
    if (value < array[0]) {
      console.debug('Unexpected ' + value + ' lesser than ' + array[0]);
      return null;
    }

    // Within range
    for (let i=1; i < array.length; i++) {
      let low = array[i-1];
      let high = array[i];
      if (value >= low && value <= high) {
        return i;
      }
    }

    // Above upper limit
    console.warn('Unexpected ' + value + ' greater than ' + array[array.length-1]);
    return null;
  }

  // Helper function. Given an array and an index (greater than 0) return the
  // name for the index as a range.
  getColumnName(array, index) {
    let low = array[index-1];
    let high = array[index];
    return (high === Infinity) ? (low + ' +') : (low + ' - ' + high);
  }

  onDataReceived(dataIn) {
    let speeds= [];
    let angles = [];
    for (let serie of dataIn) {
      let datapoints = serie.datapoints.map(function(x) { return x[0]; });
      if (serie.target === 'speed') {
        speeds = datapoints;
      } else if (serie.target === 'direction') {
        angles = datapoints;
      } else {
        console.warn('unexpected target ' + serie.target);
      }
    }

/*
    let speedMax = Math.max(...speeds);
    console.info('SPEED 0-' + speedMax);
*/

    let angleLimits = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360];
    let speedLimits = [0, 3, 6, 9, 12, 15, Infinity];

    // [angle-index][speed-index] = 0
    let matrix = {};
    for (let i=1; i < angleLimits.length; i++) {
      matrix[i] = {};
      for (let j=1; j < speedLimits.length; j++) {
        matrix[i][j] = 0;
      }
    }

    // [angle-index][speed-index] = 0
    for (let i=0; i < speeds.length; i++) {
      let j = this.getInsertIndex(angles[i], angleLimits);
      let k = this.getInsertIndex(speeds[i], speedLimits);
      if (j != null && k != null) {
        matrix[j][k]++;
      }
    }
    console.debug('matrix=', matrix);

    // Columns
    let columns = ['angle'];
    for (let i=1; i < speedLimits.length; i++) {
      columns.push(this.getColumnName(speedLimits, i));
    }

    // [{angle: angle, speed-0: n, ..., speed-n: n, total: n} ... ]
    let data = [];
    for (let i=1; i < angleLimits.length; i++) {
      let row = {
        angle: angleLimits[i-1]
      };
      let total = 0;
      for (let j=1; j < speedLimits.length; j++) {
        let name = columns[j];
        total += row[name] = matrix[i][j];
      }
      row['total'] = total;
      data.push(row);
    }
    data['columns'] = columns;
    console.debug('data=', data);

    let svg = d3.select("svg#windrose-" + this.panel.id);
    svg.selectAll('*').remove();

    // Set width and height
    let node = svg.node().parentNode;
    let size = Math.min(node.offsetWidth, node.offsetHeight);
    let width = size, height = size;
    svg.attr('width', width).attr('height', height);

    let margin = {top: 40, right: 80, bottom: 40, left: 40},
        innerRadius = 20,
        chartWidth = width - margin.left - margin.right,
        chartHeight= height - margin.top - margin.bottom,
        outerRadius = (Math.min(chartWidth, chartHeight) / 2),
        g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var angle = d3.scaleLinear()
        .range([0, 2 * Math.PI]);

    var radius = d3.scaleLinear()
        .range([innerRadius, outerRadius]);

    var x = d3.scaleBand()
        .range([0, 2 * Math.PI])
        .align(0);

    var y = d3.scaleLinear() //you can try scaleRadial but it scales differently
        .range([innerRadius, outerRadius]);

    var z = d3.scaleOrdinal()
        .range(["#4242f4", "#42c5f4", "#42f4ce", "#42f456", "#adf442", "#f4e242", "#f4a142", "#f44242"]);

    x.domain(data.map(function(d) { return d.angle; }));
    y.domain([0, d3.max(data, function(d) { return d.total; })]);
    z.domain(data.columns.slice(1));
    // Extend the domain slightly to match the range of [0, 2π].
    angle.domain([0, d3.max(data, function(d,i) { return i + 1; })]);
    radius.domain([0, d3.max(data, function(d) { return d.y0 + d.y; })]);
    let angleOffset = -360.0/data.length/2.0;
    g.append("g")
        .selectAll("g")
        .data(d3.stack().keys(data.columns.slice(1))(data))
        .enter().append("g")
        .attr("fill", function(d) { return z(d.key); })
        .selectAll("path")
        .data(function(d) { return d; })
        .enter().append("path")
        .attr("d", d3.arc()
            .innerRadius(function(d) { return y(d[0]); })
            .outerRadius(function(d) { return y(d[1]); })
            .startAngle(function(d) { return x(d.data.angle); })
            .endAngle(function(d) { return x(d.data.angle) + x.bandwidth(); })
            .padAngle(0.01)
            .padRadius(innerRadius))
        .attr("transform", function() {return "rotate("+ angleOffset + ")"});

    var label = g.append("g")
        .selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          let rotate = ((x(d.angle) + x.bandwidth() / 2) * 180 / Math.PI - (90-angleOffset));
          return "rotate(" + rotate + ")translate(" + (outerRadius+30) + ",0)";
        });

    label.append("text")
        .attr("transform", function(d) {
          return ((x(d.angle) + x.bandwidth() / 2 + Math.PI / 2) % (2 * Math.PI) < Math.PI)
            ? "rotate(90)translate(0,16)"
            :  "rotate(-90)translate(0,-9)";
        })
        .attr('fill', 'white')
        .text(function(d) { return d.angle; })
        .style("font-size", '14px');

    g.selectAll(".axis")
        .data(d3.range(angle.domain()[1]))
        .enter().append("g")
        .attr("class", "axis")
        .attr("transform", function(d) { return "rotate(" + angle(d) * 180 / Math.PI + ")"; })
        .call(d3.axisLeft()
            .scale(radius.copy().range([-innerRadius, -(outerRadius+10)])));

    var yAxis = g.append("g")
        .attr("text-anchor", "middle");

    var yTick = yAxis
        .selectAll("g")
        .data(y.ticks(5).slice(1))
        .enter().append("g");

    yTick.append("circle")
        .attr("fill", "none")
        .attr("stroke", "gray")
        .attr("stroke-dasharray", "4,4")
        .attr("r", y);

    yTick.append("text")
        .attr("y", function(d) { return -y(d); })
        .attr("dy", "-0.35em")
        .attr("x", function() { return -10; })
        .text(y.tickFormat(5, "s"))
        .attr('fill', 'white')
        .style("font-size", '14px');

    var legend = g.append("g")
        .selectAll("g")
        .data(data.columns.slice(1).reverse())
        .enter().append("g")
//      .attr("transform", function(d, i) {
//        return "translate(-40," + (i - (data.columns.length - 1) / 2) * 20 + ")";
//      });
        .attr("transform", function(d, i) {
          let translate = (outerRadius+0) + "," + (-outerRadius + 40 +(i - (data.columns.length - 1) / 2) * 20);
          return "translate(" + translate + ")"; 
        });

    legend.append("rect")
        .attr("width", 18)
        .attr("height", 18)
        .attr("fill", z);

    legend.append("text")
        .attr("x", 24)
        .attr("y", 9)
        .attr("dy", "0.35em")
        .text(function(d) { return d; })
        .attr('fill', 'white')
        .style("font-size", '12px');

  }

}

WindroseCtrl.templateUrl = 'module.html';

export {
  WindroseCtrl as PanelCtrl
};
