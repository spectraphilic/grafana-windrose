import { MetricsPanelCtrl } from 'app/plugins/sdk';
import { debounce, defaults, range } from 'lodash-es';
import * as d3 from 'd3';

const panelDefaults = {
  // X axis
  slices: 32,
  // Y axis
  start: 0,
  step: '',
  unit: 'm/s'
};

class WindroseCtrl extends MetricsPanelCtrl {

  constructor($scope, $injector) {
    super($scope, $injector);
    defaults(this.panel, panelDefaults);
    this.events.on('data-error', this.onDataError.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));

    let render = this.onRender.bind(this);
    this.events.on('render', render);

    // When viewing a single panel resizing the window does not emit
    // panel-size-changed (but it does when looking a dashboard).
    window.addEventListener('resize', debounce(render, 200));

    //this.events.on('data-snapshot-load', () => { console.log('data-snapshot-load'); });
    //this.events.on('panel-size-changed', () => { console.log('panel-size-changed'); });
    //this.events.on('panel-teardown', () => { console.log('panel-teardown'); });
    //this.events.on('refresh', () => { console.log('refresh'); });
  }

  onInitEditMode() {
    console.debug('init-edit-mode');
    let template = 'public/plugins/spectraphilic-windrose-panel/editor.html';
    this.addEditorTab('Options', template, 2);
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

  onDataReceived(data) {
    let speeds = [];
    let angles = [];
    for (let serie of data) {
      let datapoints = serie.datapoints.map(function(x) { return x[0]; });
      if (serie.target === 'speed') {
        speeds = datapoints;
      } else if (serie.target === 'direction') {
        angles = datapoints;
      } else {
        console.warn('unexpected target ' + serie.target);
      }
    }

    this.speeds = speeds;
    this.angles = angles;
    this.render()
  }


  onRender() {
    //console.log(this);

    // Data
    let speeds = this.speeds;
    let angles = this.angles;

    // Configuration
    let slices = this.panel.slices;
    let start = this.panel.start;
    let step = this.panel.step;
    step = (step == '') ? Math.ceil(speedMax / 8): +step;
    let unit = this.panel.unit;

    // Variables
    let gridX = range(0, 360, 360 / 8);
    let angleLimits = range(0, 360 + 0.1, 360 / slices);
    let speedMax = Math.max(...speeds);
    let speedLimits = range(start, speedMax, step);
    speedLimits.push(Infinity);
    //console.info('SPEED 0-' + speedMax, speedStep, speedLimits);

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
    let columns = [];
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
        let name = columns[j-1];
        total += row[name] = matrix[i][j];
      }
      row['total'] = total;
      data.push(row);
    }
    console.debug('data=', data);


    // SVG
    let svg = d3.select("svg#windrose-" + this.panel.id);
    svg.selectAll('*').remove();

    // Set width and height
    let node = svg.node().parentNode;
    let width = node.offsetWidth, height = node.offsetHeight;
    svg.attr('width', width).attr('height', height);

    let margin = {top: 40, right: 80, bottom: 40, left: 40},
        innerRadius = 0,
        chartWidth = width - margin.left - margin.right,
        chartHeight = height - margin.top - margin.bottom,
        outerRadius = (Math.min(chartWidth, chartHeight) / 2),
        g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var angle = d3.scaleLinear().range([0, 2 * Math.PI]);
    var x = d3.scaleBand().range([0, 2 * Math.PI]).align(0);

    // you can try scaleRadial but it scales differently
    var y = d3.scaleLinear().range([innerRadius, outerRadius]);
    var z = d3.scaleOrdinal()
        .range(["#4242f4", "#42c5f4", "#42f4ce", "#42f456", "#adf442", "#f4e242", "#f4a142", "#f44242"]);

    x.domain(data.map(function(d) { return d.angle; }));
    y.domain([0, d3.max(data, function(d) { return d.total; })]);
    z.domain(columns);
    // Extend the domain slightly to match the range of [0, 2π].
    angle.domain([0, d3.max(data, function(d,i) { return i + 1; })]);

    // Draw data
    g.append("g")
        .selectAll("g")
        .data(d3.stack().keys(columns)(data))
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
            .padRadius(innerRadius));

    // X axis (angle)
    var xLinear = d3.scaleLinear().range([0, 2 * Math.PI])
        .domain([0, d3.max(gridX, function(d, i) { return i + 1; })]);
    let xBand = d3.scaleBand().range([0, 2 * Math.PI]).align(0).domain(gridX);
    let angleOffset = -360.0/gridX.length/2.0;
    var label = g.append("g")
        .selectAll("g")
        .data(gridX)
        .enter().append("g")
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          let rotate = ((xBand(d) + xBand.bandwidth() / 2) * 180 / Math.PI - (90-angleOffset));
          return "rotate(" + rotate + ")translate(" + (outerRadius+30) + ",0)";
        });

    label.append("text")
        .attr("transform", function(d) {
          return ((xBand(d) + xBand.bandwidth() / 2 + Math.PI / 2) % (2 * Math.PI) < Math.PI)
            ? "rotate(90)translate(0,16)"
            :  "rotate(-90)translate(0,-9)";
        })
        .attr('fill', 'white')
        .text(function(d) { return d; })
        .style("font-size", '14px');

    let radius = d3.scaleLinear()
        .range([innerRadius, outerRadius])
        .domain([0, d3.max(gridX, function(d) { return d.y0 + d.y; })]);
    g.selectAll(".axis")
        .data(d3.range(xLinear.domain()[1]))
        .enter().append("g")
        .attr("class", "axis")
        .attr("transform", function(d) { return "rotate(" + xLinear(d) * 180 / Math.PI + ")"; })
        .call(d3.axisLeft().scale(radius.copy().range([-innerRadius, -(outerRadius+10)])));

    // Y axis
    var yAxis = g.append("g").attr("text-anchor", "middle");
    var yTick = yAxis
        .selectAll("g")
        .data(y.ticks(5).slice(1))
        .enter().append("g");

    // Y axis: circles
    yTick.append("circle")
        .attr("fill", "none")
        .attr("stroke", "gray")
        .attr("stroke-dasharray", "4,4")
        .attr("r", y);

    // Y axis: labels
    yTick.append("text")
        .attr("y", function(d) { return -y(d); })
        .attr("dy", "-0.35em")
        .attr("x", function() { return -10; })
        .text(y.tickFormat(5, "s"))
        .attr('fill', 'white')
        .style("font-size", '14px');

    // Legend
    var legend = g.append("g")
        .selectAll("g")
        .data(columns.reverse())
        .enter().append("g")
        .attr("transform", function(d, i) {
          let translate_x = outerRadius + 30;
          let translate_y = -outerRadius + 40 + (i - columns.length / 2) * 20;
          return "translate(" + translate_x + "," + translate_y + ")";
        });

    legend.append("rect")
        .attr("width", 18)
        .attr("height", 18)
        .attr("fill", z);

    legend.append("text")
        .attr("x", 24)
        .attr("y", 9)
        .attr("dy", "0.35em")
        .text(function(d) { return d + ' ' + unit; })
        .attr('fill', 'white')
        .style("font-size", '12px');

  }

}

WindroseCtrl.templateUrl = 'module.html';

export {
  WindroseCtrl as PanelCtrl
};
