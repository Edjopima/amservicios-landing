import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header'
import Home from './containers/Home/Home'
import About from './containers/About/About'
import Contact from './containers/Contact/Contact'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
        <Header />
          <Switch >
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
        <Footer/>
    </>
  );
}

export default App;
