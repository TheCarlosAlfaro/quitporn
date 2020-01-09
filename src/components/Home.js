import React from 'react';
import app from './base';
import Question from './Question';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-md-center my-5">
        <Question />
      </Row>
      <Row>
        <Col>
          <Button onClick={() => app.auth().signOut()}>Sign out</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
