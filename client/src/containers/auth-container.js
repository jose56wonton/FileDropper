import React, { Component } from "react";
import AuthComponent from "../components/auth-component";
import * as actions from "../actions";
import { connect } from "react-redux";
import Cookies from "universal-cookie";
import * as cookieNames from "./auth/auth-cookies";
import { withRouter } from "react-router";
import NavContainer from "./general/nav-container";
class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: true
    };
  }
  componentDidMount = () => {
    // Take this out in the future
    const cookies = new Cookies();
    const email = cookies.get(cookieNames.EMAIL);
    const password = cookies.get(cookieNames.PASSWORD);
    if (email && password) {
      this.props.login(email, password).then(() => {
        this.props.history.push(
          `/${this.props.user.value.email.split("@")[0]}`
        );
      });
    }
  };
  setFormSignIn = () => {
    this.setState({
      formType: true
    });
    this.props.resetMsg();
    this.forceUpdate();
  };
  setFormSignUp = () => {
    this.setState({
      formType: false
    });
    this.props.resetMsg();
    this.forceUpdate();
  };
  render() {
    return (
      <div>
        <NavContainer />
        <AuthComponent
          formType={this.state.formType}
          setFormSignIn={this.setFormSignIn}
          setFormSignUp={this.setFormSignUp}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, actions)(withRouter(AuthContainer));
