import React from 'react';
import app from './base';
// import { Link } from 'react-router-dom';
import Question from './Question';
import { Container, Row, Col, Button } from 'react-bootstrap';

class Home extends React.Component {
  state = {
    answers: {
      didWatched: null
    }
  };

  recordsAnswer = fromQuestion => {
    const answers = { ...this.state.answers };
    answers.didWatched = fromQuestion;
    this.setState({ answers });
    console.log(this.state);
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center my-5">
          <Question recordsAnswer={this.recordsAnswer} />
        </Row>

        {/* <Row className="justify-content-center my-5">
        <div className="sign-up">
          <Link to="/heatmap">Check out your progress!</Link>
        </div>
      </Row> */}

        <Row>
          <Col>
            <Button onClick={() => app.auth().signOut()}>Sign out</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
