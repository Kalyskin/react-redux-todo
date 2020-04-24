import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store, history } from "./store";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import "./index.css";
import App from "./components/App/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
