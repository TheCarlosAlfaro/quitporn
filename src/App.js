import React from 'react';
import './App.css';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import HeatMap from './components/HeatMap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
 handleClick = () => {
   console.log('Button clicked');

 }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/create-account" component={CreateAccount} />
              <Route path="/the-big-picture" component={HeatMap} />
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
