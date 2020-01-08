import React from 'react';
import './App.css';
import Login from './components/Login';
import Question from './components/Question';
import HeatMap from './components/HeatMap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  handleClick = () => {
    console.log('Button clicked');
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/did-you-watched" component={Question} />
          <Route path="/the-big-picture" component={HeatMap} />
        </Switch>
      </Router>
    );
  }
}

export default App;
