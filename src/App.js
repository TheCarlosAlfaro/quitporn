import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="welcome-message">
          <p>Welcome</p>
          <p>to</p>
        </div>
        <h1 className="logo">QuitPorn.app</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <Button></Button>
      </header>
    </div>
  );
}

export default App;
