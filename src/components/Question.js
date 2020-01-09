import React from 'react';
import { Container, Button } from 'react-bootstrap';

class Question extends React.Component {
  handleClick = e => {
    e.preventDefault();
    const answer = e.target.value;
    let didWatched = null;
    if (answer === 'true') {
      didWatched = true;
    } else {
      didWatched = false;
    }

    this.props.recordsAnswer(didWatched);
  };

  render() {
    return (
      <Container>
        <h1>Did you watched today?</h1>

        <Button
          onClick={this.handleClick}
          value="true"
          className="my-5"
          variant="danger"
          size="lg"
          block
        >
          YES
        </Button>

        <Button
          onClick={this.handleClick}
          value="false"
          className="my-5"
          variant="success"
          size="lg"
          block
        >
          NO
        </Button>
      </Container>
    );
  }
}

export default Question;
