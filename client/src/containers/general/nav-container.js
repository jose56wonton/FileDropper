import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";
class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: true
    };
  }
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
    const auth = this.props.user.value;
    let right = null;
    if (this.props.user.value && this.props.user.value.email) {
      right = (
        <div className="right menu">
          <a onClick={this.logout} className="ui item">Logout</a>
          <a onClick={this.user} className="item">
            <i className="user icon" />
          </a>
        </div>
      );
    } else {
      right = (
        <div className="right menu">
          <a onClick={this.login} className="ui item">Login</a>}
        </div>
      );
    }
    return (
      <div className="container">
        <div className="ui secondary pointing menu">
          <a onClick={this.home} className="item">Home</a>
          {right}
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

export default connect(mapStateToProps, actions)(withRouter(NavContainer));
