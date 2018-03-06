import React, { Component } from "react";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";

import AuthContainer from "./containers/auth-container";
import UserContainer from "./containers/user-container";

import { firebaseAuth } from "./helpers/fire";
import Cookies from "universal-cookie";
import * as cookieNames from "./containers/auth/auth-cookies";
import { connect } from "react-redux";
import * as actions from "./actions";
import * as status from "./reducers/status";

class App extends Component {
  render() {
    console.log(this.props.user.status);
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/auth" component={AuthContainer} />
          <PrivateRoute
            user={this.props.user}
            path="/:user"
            component={UserContainer}
          />
          <Route path="/" exact component={AuthContainer} />
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
