import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import todo from "./todo";

export const createRootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    todo,
  });
};
