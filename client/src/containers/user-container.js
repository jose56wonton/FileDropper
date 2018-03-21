import React, { Component } from "react";
import { connect } from "react-redux";

import UserComponent from '../components/user/user-component';
import NavContainer from "./general/nav-container";

class UserContainer extends Component {
  render() {
    return (
      <div >
        <NavContainer />
        <UserComponent />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null)(UserContainer);
