import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import "./styles/styles.css";

// Components
import rootReducer from './reducers/index';


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


ReactDOM.render(
  <Provider store={store}>
   <App />
  </Provider>,
  document.getElementById('root')
);
