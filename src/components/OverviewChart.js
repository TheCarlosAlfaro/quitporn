import React from 'react';
import * as d3 from 'd3';

class OverviewChart extends React.Component {
  componentDidMount() {
    const data = this.props.data;
    this.drawChart(data);
  }

  drawChart(data) {
    console.log(data[0].month);
    const canvas = d3
      .select(this.refs.my_dataviz)
      .selectAll('h2')
      .data(data)
      .enter()
      .append('h2')
      .text(d => {
        return `${d.month} ${d.day} ${d.status}`;
      });
  }

  render() {
    return <div ref="my_dataviz"></div>;
  }
}

export default OverviewChart;
