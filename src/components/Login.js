import React from 'react';

const Login = props => (
  <div>
    <h2>Login</h2>
    <p>Sign in to quitporn.app</p>
    <button className="facebook" onClick={() => props.authenticate('Facebook')}>
      Log In With Facebook
    </button>
  </div>
);

export default Login;
