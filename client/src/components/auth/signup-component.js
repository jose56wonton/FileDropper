import React from "react";

export const SignUpComponent = props => {
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
                    type="password"
                    placeholder="*******"
                    onChange={props.handlePassword1Change}
                    value={props.password1}
                  />
                  <i className="lock icon" />
                </div>
              </div>
              <div className="field">
                <label>Password (Repeat)</label>
                <div className="ui left icon input">
                  <input
                    type="password"
                    placeholder="*******"
                    onChange={props.handlePassword2Change}
                    value={props.password2}
                  />
                  <i className="lock icon" />
                </div>
              </div>
              <input
                className="ui blue submit button"
                type="submit"
                value="Submit"
              />
              {props.status &&
                <div>
                  <p>
                    {props.status}
                  </p>
                </div>}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpComponent;
