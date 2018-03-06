import React from "react";

export const SignInComponent = props => {
  return (
    <div>
      <h5>Sign In</h5>
      <form onSubmit={props.handleSubmit}>
        <label>Email</label>
        <input
          className="u-full-width"
          type="email"
          placeholder="asdf@gmail.com"
          onChange={props.handleEmailChange}
          value={props.email}
        />
        <label>Password</label>
        <input
          className="u-full-width"
          type="password"
          placeholder="*******"
          onChange={props.handlePasswordChange}
          value={props.password}
        />        
        <input className="button-primary" type="submit" value="Submit" />
        {props.status &&
          <div>
            <div>
              <p>
                {props.status}
              </p>
            </div>
            <div>
              <button onClick={props.reset} >
                Forgot Password?
              </button>
            </div>
          </div>}
      </form>
    </div>
  );
};

export default SignInComponent;
