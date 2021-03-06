// import logo from './logo.svg';
import React from 'react';
import './App.css';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  tick() {
    this.setState({
      date: new Date()
    })
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
class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleON: true }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(state => ({
      isToggleON: !state.isToggleON
    }))
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleON ? 'on' : 'off'}
      </button>
    )
  }
}
//注意*首字母必须大写
function UserGreeting(props) {
  return <h1>welcome back</h1>
}
function GuestGreeting(props) {
  return <h1>please sign up</h1>
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}
//add log 
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLoginOutClick = this.handleLoginOutClick.bind(this)
    this.state = { isLoggedIn: false }
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true })
  }
  handleLoginOutClick() {
    this.setState({ isLoggedIn: false })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLoginOutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}
export { LoginControl, Clock, Toggle };
