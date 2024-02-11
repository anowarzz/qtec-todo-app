const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [action.payload, ...state.todos],
      };

    default:
      break;
  }
};

export { todoReducer };
