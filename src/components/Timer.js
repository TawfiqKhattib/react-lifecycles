import React, { Component } from 'react';

class Timer extends Component {

    constructor() {
      super()
      this.state = {
        time: new Date(),
      }
    }
    componentWillUnmount (){
      clearInterval(this.timer)
    }
    componentDidMount() {
      this.timer = setInterval(() => {
        this.setState({ time: new Date() })
        console.log("Updated time")
      }, 1000)
    }
  
    render() {
      return <div> {this.state.time.toLocaleTimeString()}</div >
    }
  }

  export default Timer;