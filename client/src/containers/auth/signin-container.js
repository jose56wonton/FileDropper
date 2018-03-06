import React, { Component } from "react";
import { connect } from "react-redux";
import Cookies from "universal-cookie";
import { withRouter } from "react-router";


import SignInComponent from "../../components/auth/signin-component";
import * as cookieNames from "../../constants/cookie-constants";
import * as actions from "../../actions";

class SignInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props
      .login(this.state.email, this.state.password)
      .then(() => {
        this.props.history.push(
          `/${this.props.user.value.email.split("@")[0]}`
        );
        let dateOfExpiration = new Date();
        dateOfExpiration.setDate(dateOfExpiration.getDate() + 7);
        const cookies = new Cookies();
        cookies.set(cookieNames.EMAIL, this.state.email, {
          expires: dateOfExpiration
        });
        cookies.set(cookieNames.PASSWORD, this.state.password, {
          expires: dateOfExpiration
        });
      })
      .catch(() => {
       
      });
  };
  reset = () => {
    this.props.reset(this.state.email);
  };
  changeEmail = e => {
    this.setState({ email: e.target.value });
  };
  changePassword = e => {
    this.setState({ password: e.target.value });
  };
  render() {
    return (
      <SignInComponent
        handleSubmit={this.handleSubmit}
        reset={this.reset}
        status={this.props.user.statusMsg}
        email={this.state.email}
        password={this.state.password}
        handleEmailChange={this.changeEmail}
        handlePasswordChange={this.changePassword}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, actions)(withRouter(SignInContainer));
