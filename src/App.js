import React, { Component } from 'react';
import './App.css';
import Tabletop from 'tabletop';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init( {
      key: '1Zg4sEelM0aVL_RUesEXq-VhroA27uKngh1BJEBVH460',
      callback: googleData => {
        console.log('google sheet data --->', googleData)
      },
      simpleSheet: true
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><font color="white">Company inventory tracker</font></h1>
        </header>
        </div>
    );
  }
}

export default App;
