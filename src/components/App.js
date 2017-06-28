import React, { Component } from 'react';
import '../css/App.css';
import * as rb from 'react-bootstrap';
import Nav from './Nav';
import Main from './Main';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
