import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HeatMap from './components/HeatMap';
import { AuthProvider } from './components/Auth';
import PrivateRoute from './components/PrivateRoute';

class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/heatmap" component={HeatMap} />
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
