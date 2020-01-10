import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import Chart from 'react-apexcharts';

class HeatMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        // 0 = unrecorded
        // 2 = Yes
        // 3 = NO
        {
          name: 'Saturday',
          data: [0, 1, 1, 2, 0, 0, 0, 3, 0, 0, 2, 0, 1, 1, 0]
        },
        {
          name: 'Friday',
          data: [1, 2, 2, 2, 0, 2, 2, 3, 3, 3, 1, 3, 1, 3, 0, 3]
        },
        {
          name: 'Thursday',
          data: [0, 1, 1, 3, 3, 0, 0, 1, 3, 0, 3, 1]
        },
        {
          name: 'Wednesday',
          data: [3, 3, 3, 1, 1, 0, 0, 1, 3, 0, 3, 3, 1, 0, 3, 1, 2, 2, 2, 2]
        },
        {
          name: 'Tuesday',
          data: [1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3]
        },
        {
          name: 'Monday',
          data: [1, 1, 3, 3, 1, 2, 0, 2, 0, 0, 1, 1, 0, 1, 0, 0, 1]
        },
        {
          name: 'Sunday',
          data: [
            3,
            2,
            1,
            1,
            3,
            0,
            2,
            1,
            1,
            1,
            0,
            2,
            0,
            3,
            0,
            1,
            1,
            1,
            0,
            0,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            0,
            0,
            1,
            0
          ]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'heatmap'
        },
        stroke: {
          width: 0
        },
        plotOptions: {
          heatmap: {
            radius: 50,
            enableShades: false,
            colorScale: {
              ranges: [
                {
                  from: 2,
                  to: 2,
                  color: '#DC3545',
                  name: 'YES'
                },
                {
                  from: 3,
                  to: 100,
                  color: '#27A745',
                  name: 'NO'
                },
                {
                  from: 0,
                  to: 1,
                  color: '#EEEEEE',
                  name: 'Unrecorded'
                }
              ]
            }
          }
        },
        dataLabels: {
          enabled: false,
          style: {
            colors: ['#fff']
          }
        },
        xaxis: {
          type: 'category'
        },
        title: {
          text: 'The big picture'
        }
      }
    };
  }
  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-md-center my-5">
            <h1>How are you doing?</h1>
          </Row>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="heatmap"
            height={350}
          />
        </Container>
      </>
    );
  }
}

export default HeatMap;
