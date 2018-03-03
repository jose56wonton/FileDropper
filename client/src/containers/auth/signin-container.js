import React, { Component } from "react";
import { login, resetPassword } from "../../helpers/auth";
import * as actions from "../../actions";
import { connect } from "react-redux";
class SignInContainer extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.email.value, this.password.value);
  };
  reset = () => {
    this.props.reset(this.email.value);
  };
  render() {
    return (
      <div>
        <h5>Sign In</h5>
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
            ref={password => (this.password = password)}
          />
          {this.props.user.statusMsg &&
            <div className="alert alert-danger" role="alert">
            <span
              className="glyphicon glyphicon-exclamation-sign"
              aria-hidden="true"
            />
            <span className="sr-only">{this.props.user.statusMsg}</span>
            &nbsp;{" "}
            <a href="#" onClick={this.reset} className="alert-link">
            Forgot Password?
          </a>
          </div>}
         
          <input className="button-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, actions)(SignInContainer);
