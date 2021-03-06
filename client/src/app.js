import React, { Component } from "react";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";

import AuthContainer from "./containers/auth-container";
import UserContainer from "./containers/user-container";
import HomeContainer from './containers/home-container';

import * as actions from "./constants/action-type-constants";
import * as status from "./constants/state-status-constants";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/auth" component={AuthContainer} />
          <PrivateRoute
            user={this.props.user}
            path="/:user"
            component={UserContainer}
          />
          <Route path="/" component={HomeContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, actions)(App);

function PrivateRoute({ component: Component, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        user.status === status.SUCCESS
          ? <Component {...props} />
          : <Redirect
              to={{ pathname: "/auth", state: { from: props.location } }}
            />}
    />
  );
}
