import React, { Fragment } from 'react';
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './theme.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Home />
            </React.Fragment>
          )} />
          <Route path="/myinventory" render={props => (
            <React.Fragment>
              <Home />
            </React.Fragment>
          )} />
        </div>
      </Router>
    );
  };
}

export default App;
