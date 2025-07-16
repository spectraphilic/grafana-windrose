import React, { useEffect, useRef } from 'react';
import { GrafanaTheme2, PanelProps, getValueFormat } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from '@emotion/css';
import { useStyles2, useTheme2 } from '@grafana/ui';
import * as d3 from 'd3';

interface Props extends PanelProps<SimpleOptions> { }

const getStyles = (theme: GrafanaTheme2, options: SimpleOptions) => {
  return {
    wrapper: css({
      position: "relative",
    }),
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    zLabel: css({
      fontSize: `${options.legendFontSize}px`,
    }),
    speedLabel: css({
      fontSize: `${options.speedFontSize}px`,
    }),
    directionLabel: css({
      fontSize: `${options.directionFontSize}px`,
    }),
    axis: css({
      opacity: 0.7,
    }),
  };
};

// Helper function. Returns an array with the intervals from 'start' to 'end'
// defined by the size of the intervals (step). Example:
// getIntervals(0, 100, 30) => [[0, 30], [30, 60], [60, 90], [90, 120]]
const getIntervals = (start: number, end: number, step: number): Array<[number, number]> => {
  const d = end - start;
  const n = Math.ceil(d / step);
  return Array.from({ length: n }, (_, i) => [start + i * step, start + (i + 1) * step]);
};

const range = (start: number, end?: number, step = 1): number[] => {
  const output = [];

  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (
    (start < end && step <= 0) ||
    (start > end && step >= 0)
  ) {
    throw new Error('Step value causes infinite loop');
  }

  if (start < end) {
    for (let i = start; i < end; i += step) {
      output.push(i);
    }
  } else {
    for (let i = start; i > end; i += step) {
      output.push(i);
    }
  }

  return output;
};


const getIntervalIndex = (value: number, intervals: Array<[number, number]>, max = 0): number | null => {
  // Check value
  if (value === null) {
    console.log('Unexpected value is null');
    return null;
  }

  // Empty intervals
  if (!Array.isArray(intervals[0])) {
    return null;
  }
  
  // Below lower limit
  if (value < intervals[0][0]) {
    return null;
  }

  // For circular intervals, the 1st interval starts at a negative value
  const len = intervals.length;
  const lastInterval = intervals[len - 1];
  if (value >= lastInterval[1]) {
    value -= max;
  }

  // Within range
  for (let i = 0; i < len; i++) {
    const [low, high] = intervals[i];
    if (value >= low && value < high) {
      return i;
    }
  }

  // Last interval is right-closed (except in circular intervals)
  if (value === lastInterval[1]) {
    return len - 1;
  }

  // Above upper limit
  console.warn(`getIntervalIndex ${value} too big`);
  return null;
};

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme2();
  const styles = useStyles2(() => getStyles(theme, options));

  let speeds: number[];
  let angles: number[];

  if (data.series.length === 0) {
    throw new Error("Minimum of 1 series required");
  }
  else if (data.series.length === 1) {
    const fields = data.series[0].fields;
    speeds = fields.find((field, index) => field.name === "speed")?.values || [];
    angles = fields.find((field, index) => field.name === "direction")?.values || [];
  }
  else {
    const speedSeries = data.series.find((series, index) => {
      series.fields.some(field => field.name === "speed")
    }) || data.series[0]; // Default to first series if no "speed" field found

    const directionSeries = data.series.find((series, index) => {
      series.fields.some(field => field.name === "direction")
    }) || data.series[1]; // Default to second series if no "direction" field found

    speeds = speedSeries.fields[1].values;
    angles = directionSeries.fields[1].values;
  }

  const speedMax = speeds.length > 0 ? Math.max(...speeds) : 0;
  const raw = angles.map((angle, index) => [angle, speeds[index]])
    .filter(([angle, speed]) => speed != null);

  // Configuration
  const slices = +options.slices;
  const start = +options.start;
  const step = (options.step === '') ? Math.ceil(speedMax / 8) : +parseInt(options.step, 10);
  const unit = options.unit;

  // Intervals
  const angleStep = 360 / slices;
  const angleIntervals = getIntervals(-angleStep / 2, 360 - angleStep / 2, angleStep);
  const speedIntervals = getIntervals(start, speedMax, step);

  // [angle-index][speed-index] = 0
  const matrix = [...Array(angleIntervals.length)].map(x => Array(speedIntervals.length).fill(0));
  // [angle-index][speed-index] = n
  for (let i = 0; i < raw.length; i++) {
    let j = getIntervalIndex(raw[i][0], angleIntervals, 360);
    let k = getIntervalIndex(raw[i][1], speedIntervals);
    if (j != null && k != null) {
      matrix[j][k]++;
    }
  }

  // x = direction - angle
  // y = count     - radius
  // z = speed     - color

  // Columns
  const zLabels = speedIntervals.map(x => x[0] + ' - ' + x[1]);

  // [{angle: angle, 0: count-0, ..., n-1: count-n-1, total: count-total} ... ]
  const renderData = [];
  for (let i = 0; i < angleIntervals.length; i++) {
    const row: { [key: string]: number } = {
      angle: angleIntervals[i][0]
    };
    let total = 0;
    for (let j = 0; j < speedIntervals.length; j++) {
      let name = zLabels[j];
      total += row[name] = matrix[i][j];
    }
    row['total'] = total;
    renderData.push(row);
  }
  //console.debug('data=', data);

  // Percent
  if (options.scale === 'percent') {
    const max = d3.sum(renderData, d => d.total);
    const tmpScale = d3.scaleLinear([0, max], [0, 1]);
    for (let i = 0; i < renderData.length; i++) {
      for (let key in renderData[i]) {
        if (key !== 'angle') {
          renderData[i][key] = tmpScale(renderData[i][key]);
        }
      }
    }
  }

  const margin = { top: 40, right: 80, bottom: 40, left: 40 },
    innerRadius = 0,
    chartWidth = width - margin.left - margin.right,
    chartHeight = height - margin.top - margin.bottom,
    outerRadius = Math.min(chartWidth, chartHeight) / 2;
  const yRange = [innerRadius, outerRadius];

  // X-Axis
  const radiansRange = [0, 2 * Math.PI];
  const getRadiansFromDegrees = d3.scaleLinear([0, 360], radiansRange);

  // Y-axis
  const yMax = d3.max(renderData, d => d.total) || 0;
  const getRadius = d3.scaleLinear([0, yMax], yRange);

  // Z-axis: map speed interval labels to colors
  const getColor = d3.scaleOrdinal(zLabels, ["#4242f4", "#42c5f4", "#42f4ce", "#42f456",
    "#adf442", "#f4e242", "#f4a142", "#f44242"]);

  // Draw 1 arc for every speed interval in every direction
  const arcWidth = d3.scaleBand(renderData.map(d => d.angle), radiansRange).align(0).bandwidth();

  // X axis (angle)
  const gridN = 8;
  const gridX = range(0, 360, 360 / gridN);
  const xScale = d3.scaleLinear([0, gridN], radiansRange); // Extend the domain slightly to match the range [0, 2π]

  // Draw the text label (degrees)
  const xGridWidth = d3.scaleBand(gridX, radiansRange).align(0).bandwidth();
  const angleOffset = -360.0 / gridX.length / 2.0;
  const degrees2compass: { [key: number]: string } = {
    0: 'N',
    45: 'NE',
    90: 'E',
    135: 'SE',
    180: 'S',
    225: 'SW',
    270: 'W',
    315: 'NW',
  };
  const unitFormatter = getValueFormat(unit);
  const radius = d3.scaleLinear([0, d3.max(gridX, d => d) || 0], yRange);

  interface AxisComponentProps {
    transform: string;
  }

  const AxisComponent: React.FC<AxisComponentProps> = ({ transform }) => {
    const axisRef = useRef(null);

    useEffect(() => {
      if (axisRef.current) {
        const axis = d3.axisLeft(radius).scale(radius.copy().range([-innerRadius, -(outerRadius + 10)])).ticks(0);
        d3.select<SVGSVGElement, unknown>(axisRef.current).call(axis);
      }
    }, [transform]);

    return <g ref={axisRef} transform={transform} className={styles.axis} />;
  };

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <svg className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={`-${width / 2} -${height / 2} ${width} ${height}`}
        width={width}
        height={height}
      >
        <g>
          {d3.stack().keys(zLabels)(renderData).map((d, i) => (
            <g key={i} fill={getColor(d.key)} fillOpacity={options.opacity}>
              {d.map((pathData, index) => {
                const arcData = {
                  innerRadius: getRadius(pathData[0]),
                  outerRadius: getRadius(pathData[1]),
                  startAngle: getRadiansFromDegrees(pathData.data.angle),
                  endAngle: getRadiansFromDegrees(pathData.data.angle) + arcWidth
                };
                return <path
                  key={index}
                  d={d3.arc()
                    .innerRadius(() => getRadius(pathData[0]))
                    .outerRadius(() => getRadius(pathData[1]))
                    .startAngle(() => getRadiansFromDegrees(pathData.data.angle))
                    .endAngle(() => getRadiansFromDegrees(pathData.data.angle) + arcWidth)
                    .padAngle(0.01)
                    .padRadius(innerRadius)(arcData)?.toString() ?? undefined}
                />
              })}
            </g>
          ))}

          {gridX.map((d, i) => (
            <g
              key={i}
              textAnchor="middle"
              transform={`rotate(${(getRadiansFromDegrees(d) + xGridWidth / 2) * 180 / Math.PI - (90 - angleOffset)})translate(${outerRadius + 30},0)`}
            >
              <text
                transform={`rotate(${90 - d})`}
                fill={theme.colors.text.secondary}
                className={styles.directionLabel}
              >
                {options.x_grid === 'compass' ? degrees2compass[d] ?? d : d}
              </text>
            </g>
          ))}

          <g className="axis">
            {d3.range(xScale.domain()[1]).map((d, i) => (
              <g
                key={i}
                className="axis"
              >
                <AxisComponent key={i}
                  transform={`rotate(${xScale(d) * 180 / Math.PI})`}
                />
              </g>
            ))}
          </g>

          <g textAnchor="middle">
            {getRadius.ticks(options.rings).slice(1).map((d, i) => (
              <g key={i}>
                <circle
                  fill="none"
                  stroke={theme.colors.border.strong}
                  strokeDasharray="4,4"
                  r={getRadius(d)}
                />
                <text
                  y={-getRadius(d)}
                  dy="-0.35em"
                  x={-10}
                  fill={theme.colors.text.secondary}
                  className={styles.speedLabel}
                >
                  {getRadius.tickFormat(5, options.scale === 'percent' ? "%" : "s")(d)}
                </text>
              </g>
            ))}
          </g>

          {zLabels.slice().reverse().map((d, i) => (
            <g
              key={i}
              transform={`translate(${outerRadius + 30}, ${-outerRadius + 40 + (i - zLabels.length / 2) * 20})`}
            >
              <rect width={18} height={18} fill={getColor(d)} />
              <text
                x={24}
                y={9}
                dy="0.35em"
                fill={theme.colors.text.primary}
                className={styles.zLabel}
              >
                {`${d}${unitFormatter(i).suffix}`}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};
