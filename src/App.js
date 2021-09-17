// import logo from './logo.svg';
import React from 'react';
import './App.css';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }
  render() {
    return (
      <div>
        <h1>hello react</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock;
