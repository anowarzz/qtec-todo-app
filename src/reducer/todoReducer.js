const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      }

    default:
      break;
  }
};

export { todoReducer };
