import React, { Component } from "react";
import { login, resetPassword } from "../../helpers/auth";
import * as actions from "../../actions";
import { connect } from "react-redux";
import SignInComponent from "../../components/auth/signin-component";
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
    this.props.login(this.state.email, this.state.password);
  };
  reset = () => {
    this.props.reset(this.email.value);
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

export default connect(mapStateToProps, actions)(SignInContainer);
