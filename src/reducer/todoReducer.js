const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [action.payload, ...state.todos],
      };

    case "EDIT_TODO":
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        }),
      };

    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    case "DELETE_ALL_TODO":
      return {
        todos: [],
      };

    // toggle complete todo
    case "TOGGLE_TODO_COMPLETE":
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, isCompleted: !todo.isCompleted };
          } else {
            return todo;
          }
        }),
      };
    default:
      return state;
  }
};

export { todoReducer };
