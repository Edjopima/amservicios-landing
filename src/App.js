import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header'
import Home from './containers/Home/Home'
import About from './containers/About/About'

const Contact = () => <h1>Contact</h1>

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          path="/contact"
          component={Contact}
        />
        <Route
          path="/about"
          component={About}
        />
        <Route
          path="/"
          component={Home}
        />
      </Switch>
    </Router>
  );
}

export default App;
