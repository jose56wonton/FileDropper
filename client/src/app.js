import React, { Component } from "react";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";

import AuthContainer from "./containers/auth-container";
import UserContainer from "./containers/user-container";

import { firebaseAuth } from "./helpers/fire";
// Styles

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true
          ? <Component {...props} />
          : <Redirect
              to={{ pathname: "/", state: { from: props.location } }}
            />}
    />
  );
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? <Component {...props} /> : <Redirect to="/" />}
    />
  );
}

class App extends Component {
  state = {
    authed: false,
    loading: true
  };
  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authed: true,
          loading: false
        });
      } else {
        this.setState({
          authed: false,
          loading: false
        });
      }
    });
  }
  componentWillUnmount() {
    this.removeListener();
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute
            authed={this.state.authed}
            path="/:session"
            component={UserContainer}
          />
          <Route path="/" component={AuthContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
