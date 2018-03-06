import React, { Component } from 'react';
import {connect} from 'react-redux';
class UserContainer extends Component {
  render() {
    return (
      <div>
        wtf
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps,null)(UserContainer);