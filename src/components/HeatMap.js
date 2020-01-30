import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import app from './base';
import OverviewChart from './OverviewChart';

class HeatMap extends React.Component {
  render() {
    return (
      <Container>
        <Row className="my-5">
          <h1>Coming soon...</h1>
        </Row>

        <Row className="justify-content-md-center my-5">
          <OverviewChart data={this.props.data} />
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

export default HeatMap;
