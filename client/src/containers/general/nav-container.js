import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import NavComponent from '../../components/general/nav-component';
import * as actions from "../../actions";

class NavContainer extends Component {
 
  home = () => {
    this.props.history.push(
      `/`
    );
  };
  logout = () => {
    this.props.logout();
    this.props.history.push(
      `/auth`
    );    
  };
  login = () => {  
    this.props.history.push(
      `/auth`
    );    
  };
  user = () => {
    this.props.history.push(
      `/${this.props.user.value.email.split("@")[0]}`
    );
  };
  render() {
    const authed = this.props.user.value && this.props.user.value.email;
    return (
      <NavComponent 
      authed={authed}
      home={this.home}
      login={this.login}
      logout={this.logout}
      user={this.user}
      currentPath={this.props.location.pathname}
      /> 
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, actions)(withRouter(NavContainer));
