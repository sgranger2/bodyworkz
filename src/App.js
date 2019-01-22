import React, { Component } from 'react';
import './App.css';
import Landing from './Landing';
import {stack as Menu} from 'react-burger-menu';


class App extends Component {

  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Menu right>
          <a onClick={this.showSettings} className="menu-item--small" href="/">Settings</a>
        </Menu>
        <Landing />
      </div>
    );
  }
}

export default App;
