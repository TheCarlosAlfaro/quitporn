import React from 'react';
import Button from 'react-bootstrap/Button';

class HeatMap extends React.Component {
  handleClick = () => {
    console.log('Button clicked');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="welcome-message">
            <p>Welcome</p>
            <p>to</p>
          </div>
          <h1 className="logo">Heat Map</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <Button variant="primary" onClick={this.handleClick}>
            Primary
          </Button>
        </header>
      </div>
    );
  }
}

export default HeatMap;
