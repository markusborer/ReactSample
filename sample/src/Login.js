import React from 'react';
import {Button, Icon} from 'react-materialize';

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
      <Button onClick={this.onClick}>{this.props.isLoggedIn ? 'Logout' : 'Login'}<Icon left>{this.props.isLoggedIn ? 'power_settings_new' : 'exit_to_app'}</Icon></Button>
    );
  }

}

export default Login;
