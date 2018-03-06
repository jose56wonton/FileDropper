import React, { Component } from 'react';
import {connect} from 'react-redux';

import NavContainer from './general/nav-container';

class UserContainer extends Component {
  render() {
    return (
      <div>
      <NavContainer />
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