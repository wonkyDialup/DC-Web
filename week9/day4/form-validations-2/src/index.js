import React from "react";
import ReactDOM from "react-dom";
import logger from "redux-logger"
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {rootReducer} from "./reducers/rootReducer";
import App from "./App";
// import "./index.css";

const store = createStore(rootReducer, applyMiddleware(logger));
ReactDOM.render(
  <React.StrictMode>
    {/* Wrap our app in our provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);