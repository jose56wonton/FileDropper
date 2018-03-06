import React from "react";

export const SignInComponent = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div className="ui one column middle aligned very relaxed stackable grid">
          <div className="column">
            <div className="ui form">
              <div className="field">
                <label>Username</label>
                <div className="ui left icon input">
                  <input
                    type="email"
                    placeholder="asdf@gmail.com"
                    onChange={props.handleEmailChange}
                    value={props.email}
                  />
                  <i className="user icon" />
                </div>
              </div>
              <div className="field">
                <label>Password</label>
                <div className="ui left icon input">
                  <input
                    className="u-full-width"
                    type="password"
                    placeholder="********"
                    onChange={props.handlePasswordChange}
                    value={props.password}
                  />
                  <i className="lock icon" />
                </div>
              </div>
              <input className="ui blue submit button" type="submit" value="Submit" />
            </div>
          </div>          
          {props.status &&
            <div>
              <div>
                <p>
                  {props.status}
                </p>
              </div>
              <div>
                <button className="ui button" onClick={props.reset}>
                  Forgot Password?
                </button>
              </div>
            </div>}
        </div>
      </form>
    </div>
  );
};

export default SignInComponent;
