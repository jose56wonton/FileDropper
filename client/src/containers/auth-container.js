import React, { Component } from "react";
import AuthComponent from "../components/auth-component";
import * as actions from "../actions";
import {connect} from 'react-redux';
class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: true
    };
  }
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
      <AuthComponent
        formType={this.state.formType}
        setFormSignIn={this.setFormSignIn}
        setFormSignUp={this.setFormSignUp}
      />
    );
  }
}



export default connect(null,actions)(AuthContainer);
