import React, { Component } from 'react';
import axios from 'axios'
import Timer from './components/Timer';

class App extends Component {

  constructor() {
    super()
    this.state = {
      showTime: true
    }
  }

  hideTime = () => {
    this.setState({ showTime: !this.state.showTime })
  }

  render() {
    let timer = this.state.showTime ? <Timer /> : null
    return (
      <div className="App">
        {timer}
        <button onClick={this.hideTime}>Hide Time</button>
      </div>
    );
  }
}


export default App;
