import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class Home extends React.Component {
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
          <h1 className="logo">QuitPorn.app</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <Link to="/create-account">
            <Button variant="primary" onClick={this.handleClick}>
              Create Account
            </Button>
          </Link>
        </header>
      </div>
    );
  }
}

export default Home;
