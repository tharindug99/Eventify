import React from 'react';

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <p>Log into your account using the form below:</p>

      <form className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
