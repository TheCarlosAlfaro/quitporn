import React from 'react';
import app from './base';
// import { Link } from 'react-router-dom';
import Question from './Question';
import HeatMap from './HeatMap';
import { Container, Row, Col, Button } from 'react-bootstrap';

class Home extends React.Component {
  state = {
    answers: {
      didWatched: null
    },
    // data: [12, 5, 6, 6, 9, 10],
    data: [
      {
        month: 'Jan',
        day: 1,
        status: true
      },
      {
        month: 'Jan',
        day: 2,
        status: false
      },
      {
        month: 'Jan',
        day: 3,
        status: false
      },
      {
        month: 'Jan',
        day: 4,
        status: null
      },
      {
        month: 'Jan',
        day: 5,
        status: false
      },
      {
        month: 'Jan',
        day: 6,
        status: true
      },
      {
        month: 'Jan',
        day: 7,
        status: true
      },
      {
        month: 'Jan',
        day: 8,
        status: null
      },
      {
        month: 'Jan',
        day: 9,
        status: true
      }
    ]
  };

  recordsAnswer = fromQuestion => {
    const answers = { ...this.state.answers };
    answers.didWatched = fromQuestion;
    this.setState({ answers });
    // console.log(this.state);
  };

  render() {
    if (this.state.answers.didWatched !== null) {
      return <HeatMap data={this.state.data} />;
    } else {
      return (
        <Container>
          <Row className="justify-content-md-center my-5">
            <Question recordsAnswer={this.recordsAnswer} />
          </Row>
          <Row>
            <Col>
              <Button onClick={() => app.auth().signOut()}>Sign out</Button>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default Home;
