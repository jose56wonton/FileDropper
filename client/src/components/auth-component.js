import React from "react";
import SignInContainer from "../containers/auth/signin-container";
import SignUpContainer from "../containers/auth/signup-container";
export const AuthComponent = props => {
  return (
    <div className="container center hero height-100">
      <div className="row">
        <div className="six columns tab">
          <h1>Filedropper</h1>
          <div class="ui buttons">
          <button class="ui button" onClick={props.setFormSignIn}>SignIn</button>
            <div class="or" />
            <button class="ui positive button" onClick={props.setFormSignUp}>SignUp</button>
          </div>         
          
          {props.formType ? <SignInContainer /> : <SignUpContainer />}
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
