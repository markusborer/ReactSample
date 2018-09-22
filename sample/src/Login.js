import React from 'react';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.props.onChange(!this.props.isLoggedIn);
  }

  render() {
    return (
      <button onClick={this.onClick}>{this.props.isLoggedIn ? 'Logout' : 'Login'}</button>
    );
  }

}

export default Login;
