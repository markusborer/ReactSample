import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import Login from './Login';
import PersonSearchPanel from './PersonSearchPanel';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn : false };
    this.changeLogin = this.changeLogin.bind(this);
  }

  changeLogin(value) {
    this.setState({ isLoggedIn: value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          The time is <Timer></Timer>
        </p>
        <Login isLoggedIn={this.state.isLoggedIn} onChange={this.changeLogin}></Login>
        <p>
          {this.state.isLoggedIn ? 'Welcome' : 'Please log in'}
        </p>
        {this.state.isLoggedIn ? <PersonSearchPanel /> : null}
      </div>
    );
  }

}

export default App;
