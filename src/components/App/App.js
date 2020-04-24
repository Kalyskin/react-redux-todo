import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";
import {
  addTodo,
  removeTodo,
  toggleTodoStatus,
  fetchTodoList,
} from "../../actions/todo";

function App() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo);

  const handleAdd = () => {
    if (inputRef.current.value !== "") {
      dispatch(addTodo(inputRef.current.value));
      inputRef.current.value = "";
    }
  };

  const handleRemove = (index) => {
    dispatch(removeTodo(index));
  };

  const handleToggle = (index) => {
    dispatch(toggleTodoStatus(index));
  };

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todoList.map(({ text, completed }, i) => (
          <li
            key={i}
            className={cn("todo", {
              todo_completed: completed,
            })}
          >
            <h4 onClick={handleToggle.bind(null, i)} className="text">
              {text}
            </h4>
            <span onClick={handleRemove.bind(null, i)} className="remove">
              Remove
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
