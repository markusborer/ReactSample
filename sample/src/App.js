import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import Login from './Login';
import PersonSearchPanel from './PersonSearchPanel';
import {Row, Col, Footer} from 'react-materialize';

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
          <Row>
          <Col s={4} m={4} className="leftAlign">
              <Login isLoggedIn={this.state.isLoggedIn} onChange={this.changeLogin}></Login>
            </Col>
            <Col s={4} m={4}>
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">{this.state.isLoggedIn ? 'Welcome to React' : 'Please log in'}</h1>
            </Col>
            <Col s={4} m={4} className="rightAlign">
              The time is <Timer></Timer>
            </Col>
          </Row>
        </header>
        {this.state.isLoggedIn ? <PersonSearchPanel /> : null}
        <Footer className="white-text">
          The time is <Timer></Timer>
        </Footer>
      </div>
    );
  }

}

export default App;
