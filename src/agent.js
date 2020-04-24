const Todo = {
  fetchTodoList: () =>
    fetch("/api/todo-list").then((response) => response.json()),
  addTodo: (todo) =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(todo), 3000);
    }),
};

export default { Todo };
