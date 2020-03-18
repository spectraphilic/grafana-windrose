import { loadPluginCss, MetricsPanelCtrl } from 'app/plugins/sdk';
import { debounce, defaults, range, zip } from 'lodash-es';
import * as d3 from 'd3';
//import "./css/base.css"


loadPluginCss({
  dark: 'plugins/spectraphilic-windrose-panel/css/dark.css',
  light: 'plugins/spectraphilic-windrose-panel/css/light.css'
});

const panelDefaults = {
  // X axis
  slices: 32,
  // Y axis
  start: 0,
  step: '',
  unit: 'm/s',
  scale: 'absolute'
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

  // Helper function. Returns an array with the intervals from 'start' to 'end'
  // defined either by the number of intervals (n) or by the size of the
  // intervals (step). Examples:
  // getIntervals(0, 360, {n: 3})     => [[0, 120], [120, 240], [240, 360]]
  // getIntervals(0, 100, {step: 30}) => [[0, 30], [30, 60], [60, 90], [90, 120]]
  getIntervals(start, end, options) {
    let d = end - start;
    let n = options.n;
    let s = options.step;

    if (n) s = d / n;
    else if (s) n = Math.ceil(d / s);

    return Array(n).fill().map((_, i) => [start + i * s, start + (i+1) * s]);
  }

  // Helper function. Given a value and an array of sorted intervals, return
  // the index of the interval the value belongs to. The first element of the
  // array defines the minimum allowed value, the last element of the array
  // defines the maximum allowed value.
  getIntervalIndex(value, array) {
    // Check value
    if (value === null) {
      console.debug('Unexpected value is null');
      return null;
    }

    // Below lower limit
    if (value < array[0][0]) {
      console.debug('Unexpected ' + value + ' lesser than ' + array[0]);
      return null;
    }

    // Within range
    for (let i=0; i < array.length; i++) {
      let low = array[i][0];
      let high = array[i][1];
      if (value >= low && value <= high) {
        return i;
      }
    }

    // Above upper limit
    console.warn('Unexpected ' + value + ' greater than ' + array[array.length-1]);
    return null;
  }


  onDataReceived(data) {
    let speeds = [];
    let angles = [];
    for (let serie of data) {
      let datapoints = serie.datapoints.map((x) => x[0]);
      if (serie.target === 'speed') {
        speeds = datapoints;
      } else if (serie.target === 'direction') {
        angles = datapoints;
      } else {
        console.warn('unexpected target ' + serie.target);
      }
    }

    this.speedMax = Math.max(...speeds);
    this.data = zip(angles, speeds);
    this.render()
  }


  onRender() {
    //console.log(this);

    // Data
    const raw = this.data;

    // Configuration
    const slices = this.panel.slices;
    const start = this.panel.start;
    const step = this.panel.step;
    const unit = this.panel.unit;
    const scale = this.panel.scale;

    const angleStep = 360 / slices;
    const speedStep = (step == '') ? Math.ceil(this.speedMax / 8): +step;

    // Variables
    const gridX = range(0, 360, 360 / 8);
    const angleIntervals = this.getIntervals(0, 360, {n: slices});
    const speedIntervals = this.getIntervals(start, this.speedMax, {step: speedStep});
    console.debug('angleIntervals=', angleIntervals);
    console.debug('speedIntervals=', speedIntervals);

    // [angle-index][speed-index] = 0
    const matrix = [...Array(angleIntervals.length)].map(x=>Array(speedIntervals.length).fill(0));
    // [angle-index][speed-index] = n
    for (let i=0; i < raw.length; i++) {
      let j = this.getIntervalIndex(raw[i][0], angleIntervals);
      let k = this.getIntervalIndex(raw[i][1], speedIntervals);
      if (j != null && k != null) {
        matrix[j][k]++;
      }
    }
    console.debug('matrix=', matrix);

    // Columns
    const columns = speedIntervals.map((x) => x[0] + ' - ' + x[1]);
    console.debug('columns=', columns);

    // [{angle: angle, speed-0: n, ..., speed-n: n, total: n} ... ]
    const data = [];
    for (let i=0; i < angleIntervals.length; i++) {
      const row = {
        angle: angleIntervals[i][0]
      };
      let total = 0;
      for (let j=0; j < speedIntervals.length; j++) {
        let name = columns[j];
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

    x.domain(data.map((d) => d.angle));
    y.domain([0, d3.max(data, (d) => d.total)]);
    z.domain(columns);
    // Extend the domain slightly to match the range of [0, 2π].
    angle.domain([0, d3.max(data, (d,i) => i + 1)]);

    // Draw data
    g.append("g")
        .selectAll("g")
        .data(d3.stack().keys(columns)(data))
        .enter().append("g")
        .attr("fill", (d) => z(d.key))
        .selectAll("path")
        .data((d) => d)
        .enter().append("path")
        .attr("d", d3.arc()
            .innerRadius((d) => y(d[0]))
            .outerRadius((d) => y(d[1]))
            .startAngle((d) => x(d.data.angle))
            .endAngle((d) => x(d.data.angle) + x.bandwidth())
            .padAngle(0.01)
            .padRadius(innerRadius));

    // X axis (angle)
    var xLinear = d3.scaleLinear().range([0, 2 * Math.PI])
        .domain([0, d3.max(gridX, (d, i) => i + 1)]);
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
        .text((d) => d)
        .style("font-size", '14px');

    let radius = d3.scaleLinear()
        .range([innerRadius, outerRadius])
        .domain([0, d3.max(gridX, (d) => d.y0 + d.y)]);
    g.selectAll(".axis")
        .data(d3.range(xLinear.domain()[1]))
        .enter().append("g")
        .attr("class", "axis")
        .attr("transform", (d) => "rotate(" + xLinear(d) * 180 / Math.PI + ")")
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
        .attr("y", (d) => -y(d))
        .attr("dy", "-0.35em")
        .attr("x", () => -10)
        .text(y.tickFormat(5, "s"))
        .attr('fill', 'white')
        .style("font-size", '14px');

    // Legend
    var legend = g.append("g")
        .selectAll("g")
        .data(columns.slice().reverse())
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
        .text((d) => d + ' ' + unit)
        .attr('fill', 'white')
        .style("font-size", '12px');

  }

}

WindroseCtrl.templateUrl = 'module.html';

export {
  WindroseCtrl as PanelCtrl
};
