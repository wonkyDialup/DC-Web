import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "./redux/reducers/rootReducer"

const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    `<App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


