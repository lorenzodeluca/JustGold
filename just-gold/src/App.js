import React, { Fragment } from 'react';
import Home from './components/pages/Home/Home';
import MyInventory from './components/pages/MyInventory/MyInventory';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './theme.css';
import MyInventoryBuy from './components/pages/MyInventoryBuy/MyInventoryBuy';
import MyInventorySell from './components/pages/MyInventorySell/MyInventorySell';
import Login from './components/pages/Login/Login';

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
          <Route path="/login" render={props => (
            <React.Fragment>
              <Login />
            </React.Fragment>
          )} />
          <Route path="/myinventory" render={props => (
            <React.Fragment>
              <MyInventory />
            </React.Fragment>
          )} />
          <Route path="/buy" render={props => (
            <React.Fragment>
              <MyInventoryBuy />
            </React.Fragment>
          )} />
          <Route path="/sell" render={props => (
            <React.Fragment>
              <MyInventorySell />
            </React.Fragment>
          )} />
        </div>
      </Router>
    );
  };
}

export default App;
