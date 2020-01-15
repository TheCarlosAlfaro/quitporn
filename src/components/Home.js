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
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,
    id: 'root'
  };

  recordsAnswer = fromQuestion => {
    const answers = { ...this.state.answers };
    answers.didWatched = fromQuestion;
    this.setState({ answers });
    console.log(this.state);
  };

  render() {
    if (this.state.answers.didWatched !== null) {
      return (
        <HeatMap
          data={this.state.data}
          width={this.state.width}
          height={this.state.height}
        />
      );
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
