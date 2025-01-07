import React, { useState } from 'react';
import swal from 'sweetalert';
import styles from './Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ switchToSignUp, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate a successful login process
    if (email && password) {
      swal({
        icon: 'success',
        title: 'Login Successful',
        text: `Welcome back, ${email}!`,
      });
      onLogin(); // Call the onLogin function to update the login state
    } else {
      swal({
        icon: 'error',
        title: 'Login Failed',
        text: 'Please check your email and password.',
      });
    }
  };

  return (
    <div className={styles.form}>
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          className={styles.inputField}
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />
        <label>Password:</label>
        <input
          className={styles.inputField}
          placeholder="Enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />
        <button className={styles.btn} type="submit">Log In</button>
      </form>
      <p>
        Don't have an account?{' '}
        <span className="btn btn-link" onClick={switchToSignUp}>Sign up</span>
      </p>
    </div>
  );
};

export default Login;
