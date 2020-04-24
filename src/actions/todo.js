import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO_STATUS,
  SET_TODO,
} from "../reducers/todo";
import agent from "../agent";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    todo: { text, completed: false },
  },
});

export const setTodo = (todoList) => ({
  type: SET_TODO,
  payload: { todoList },
});

export const fetchTodoList = () => {
  return async (dispatch, getState) => {
    const todoList = await agent.Todo.fetchTodoList();
    dispatch(setTodo(todoList));
  };
};

export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  payload: { index },
});

export const toggleTodoStatus = (index) => ({
  type: TOGGLE_TODO_STATUS,
  payload: { index },
});
