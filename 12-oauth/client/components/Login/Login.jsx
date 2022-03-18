import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import styles from './Login.module.css';

// Define the "Login" component.
//
class Login extends Component {

  // The "Login" button handler directs the server to authenticate using "GitHub".
  //
  handleLogin = () => {
    window.location.replace('/oauth');
  }

  // Render the component.
  //
  render() {

    // The component takes a property "isLoggedIn" stating whether or not the user is already
    // logged in. If they are, we redirect to the main quotes page.
    //
    if (this.props.isLoggedIn == true) {
      <Navigate to='/' />
    }

    // The user it not logged in. Render the login button.
    //
    return (
        <div className={styles['login-container']}>
          <h4>Login with</h4>
          <button onClick={this.handleLogin}></button>
        </div>
    );
  }
}

export default Login;
