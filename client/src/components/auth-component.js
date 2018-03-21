import React from "react";
import SignInContainer from "../containers/auth/signin-container";
import SignUpContainer from "../containers/auth/signup-container";
export const AuthComponent = props => {
  return (
    <div className="ui two column centered grid">
    
      <div className="ui card">
        <div className="ui secondary pointing menu">
          <a
            className={`item ${props.formType ? "active" : null}`}
            onClick={props.setFormSignIn}
          >
            SignIn
          </a>
          <a
            className={`item ${props.formType ? null : "active"}`}
            onClick={props.setFormSignUp}
          >
            SignUp
          </a>
        </div>
        <div className="content">
          {props.formType ? <SignInContainer /> : <SignUpContainer />}
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
// <div className="container center hero height-100">
//       <div className="row">

//         <div className="six columns tab">
//           <h1>Filedropper</h1>
//           <div className="ui buttons">
//           <button className="ui button" onClick={props.setFormSignIn}>SignIn</button>
//             <div className="or" />
//             <button className="ui positive button" onClick={props.setFormSignUp}>SignUp</button>
//           </div>

//
//         </div>
//       </div>
//     </div>
