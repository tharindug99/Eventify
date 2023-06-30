import React from 'react';
import '../Styles/Signup.css';

function Signup() {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <p>Create a new account by filling out the form below:</p>

      <form className="signup-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="email" placeholder="Email" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
