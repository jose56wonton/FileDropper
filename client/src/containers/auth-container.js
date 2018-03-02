import React, { Component } from "react";
import { connect } from "react-redux";
import AuthComponent from "../components/auth-component";
import * as actions from "../actions";
class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: 1
    };
  }
  setFormSignIn = () => {
    this.setState({
      formType: 1
    });
  };
  setFormSignUp = () => {
    this.setState({
      formType: 0
    });
  };
  render() {
    return (
      <AuthComponent
        formType={this.state.formType}
        setFormSignIn={this.setFormSignIn}
        setFormSignUp={this.setFormSignUp}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    session: state.session
  };
};

export default connect(mapStateToProps, actions)(AuthContainer);
