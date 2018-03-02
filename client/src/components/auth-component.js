import React from "react";
import SignInContainer from "../containers/auth/signin-container";
import SignUpContainer from "../containers/auth/signup-container";
export const AuthComponent = props => {
  return (
    <div className="container center hero height-100">
      <div>
        <h1>Filedropper</h1>
        <button onClick={props.setFormSignIn}>SignIn</button>
        <button onClick={props.setFormSignUp}>SignUP</button>
        {props.formType ? <SignInContainer /> : <SignUpContainer />}
      </div>
    </div>
  );
};

export default AuthComponent;
