export const SET_TODO = "todo/SET_TODO";
export const ADD_TODO = "todo/ADD_TODO";
export const REMOVE_TODO = "todo/REMOVE_TODO";
export const TOGGLE_TODO_STATUS = "todo/SET_TODO_STATUS";

const initialState = [];

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_TODO:
      return payload.todoList;
    case ADD_TODO:
      return [...state, payload.todo];
    case REMOVE_TODO:
      return state.filter((todo, i) => i !== payload.index);
    case TOGGLE_TODO_STATUS:
      return state.map((todo, index) => {
        if (index === payload.index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

    default:
      return state;
  }
}
