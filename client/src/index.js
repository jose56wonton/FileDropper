import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import * as reducers from './reducers';
import SigninContainer from "./containers/signin-container";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SigninContainer} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
