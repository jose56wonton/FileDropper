import React from "react";

export const SignUpComponent = props => {
  return (
    <div>
      <h5>Sign Up</h5>
      <form
        onSubmit={props.handleSubmit}
      >
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
          onChange={props.handlePassword1Change}
          value={props.password1}
        />
        <label>Password (Repeat)</label>
        <input
          className="u-full-width"
          type="password"
          placeholder="*******"
          onChange={props.handlePassword2Change}
          value={props.password2}
        />
        {props.status &&
          <div>
            <p>{props.status}</p>
          </div>}
        <input className="button-primary" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SignUpComponent;
