import React, { Component } from "react";
import { auth } from "../../helpers/auth";
import * as actions from "../../actions";
import { connect } from "react-redux";
import SignUpComponent from '../../components/auth/signup-component';

class SignUpContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password1: "",
      password2: ""
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.signup(this.state.email,this.state.password1,this.state.password2);  
  };
  changeEmail = (e) => {
    this.setState({email:e.target.value});
  }
  changePassword1 = (e) => {
    this.setState({password1:e.target.value});
  }
  changePassword2 = (e) => {
    this.setState({password2:e.target.value});
  }
  render() {
    return (
      <SignUpComponent 
        handleSubmit={this.handleSubmit}
        status={this.props.user.statusMsg}
        email={this.state.email}
        password1={this.state.password1}
        password2={this.state.password2}
        handleEmailChange={this.changeEmail} 
        handlePassword1Change={this.changePassword1}
        handlePassword2Change={this.changePassword2}
      
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps,actions)(SignUpContainer);
