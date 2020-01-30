import React from 'react';
import * as d3 from 'd3';

class OverviewChart extends React.Component {
  componentDidMount() {
    const data = this.props.data;
    this.drawChart(data);
  }

  drawChart(dataset) {
    const w = 500;
    const h = 100;
    const svg = d3
      .select(this.refs.my_dataviz)
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    svg
      .selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('fill', d => {
        if (d.status === true) {
          return 'red';
        } else if (d.status === false) {
          return 'green';
        } else {
          return 'gray';
        }
      })
      .attr('x', (d, i) => {
        return i * 30;
      })
      .attr('y', (d, i) => {
        return h - d.day * 3;
      })
      .attr('width', 25)
      .attr('height', (d, i) => {
        return d.day * 3;
      });
  }

  render() {
    return <div ref="my_dataviz"></div>;
  }
}

export default OverviewChart;
