import React, { Component } from "react";
import { auth } from "../../helpers/auth";
import * as actions from "../../actions";
import { connect } from "react-redux";

class SignUpContainer extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.signup(this.email.value,this.password1.value,this.password2.value);  
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
          {this.props.user.statusMsg &&
            <div className="alert alert-danger" role="alert">
            <span
              className="glyphicon glyphicon-exclamation-sign"
              aria-hidden="true"
            />
            <span className="sr-only">{this.props.user.statusMsg}</span>
            &nbsp;{" "}            
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
export default connect(mapStateToProps,actions)(SignUpContainer);
