import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';

class Question extends React.Component {
  handleClick = () => {
    console.log('Button clicked');
  };

  render() {
    return (
      <Container>
        <h1>Did you watched today?</h1>

        <Button className="my-5" variant="danger" size="lg" block>
          YES
        </Button>

        <Button className="my-5" variant="success" size="lg" block>
          NO
        </Button>
      </Container>
    );
  }
}

export default Question;
