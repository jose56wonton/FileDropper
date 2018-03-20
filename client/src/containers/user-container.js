import React, { Component } from "react";
import { connect } from "react-redux";

import NavContainer from "./general/nav-container";

class UserContainer extends Component {
  render() {
    return (
      <div>
        <NavContainer />
        <div className="ui secondary vertical pointing menu">
          <a className="active item">Home</a>
          <a className="item">Messages</a>
          <a className="item">Friends</a>
        </div>
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
