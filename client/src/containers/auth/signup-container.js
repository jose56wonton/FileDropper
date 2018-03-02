import React, { Component } from "react";
import { auth } from "../../helpers/auth";
function setErrorMsg(error) {
  return {
    registerError: error.message
  };
}

class SignUpContainer extends Component {
  state = {
    registerError: null,
    error: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.password1.value, this.password2.value);
    if (this.password1.value === this.password2.value) {
      auth(this.email.value, this.password2.value)
        .then(asdf => {
          console.log("sign'd up");
        })
        .catch(e => this.setState(setErrorMsg(e)));
    }else{
      this.setState(setErrorMsg("Passwords do not match"))
    }
  };
  render() {
    return (
      <div>
        <h5>Sign Up</h5>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="asdf@gmail.com"
            ref={email => (this.email = email)}
          />
          <label>Password</label>
          <input
            className="u-full-width"
            type="password"
            placeholder="*******"
            ref={password1 => (this.password1 = password1)}
          />
          <label>Password (Repeat)</label>
          <input
            className="u-full-width"
            type="password"
            placeholder="*******"
            ref={password2 => (this.password2 = password2)}
          />
          {
            this.state.registerError &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
          <input className="button-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUpContainer;
