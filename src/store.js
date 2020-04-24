import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { createRootReducer } from "./reducers";

export const history = createBrowserHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === "production") {
    return applyMiddleware(thunk, myRouterMiddleware);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(thunk, myRouterMiddleware, createLogger());
  }
};

export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(getMiddleware())
);
