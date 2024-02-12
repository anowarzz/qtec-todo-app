const todoReducer = (state, action) => {
  let updatedState;

  switch (action.type) {
    case "ADD_TODO":
      updatedState = [...state, action.payload];
      break;

    case "EDIT_TODO":
      updatedState = state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, ...action.payload }
          : todo
      );
      break;

    case "DELETE_TODO":
      updatedState = state.filter((todo) => todo.id !== action.payload.id);
      break;

    case "DELETE_ALL_TODO":
      updatedState = [];
      break;

    case "TOGGLE_TODO_COMPLETE":
      updatedState = state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      break;

    default:
      return state;
  }

  localStorage.setItem("todos", JSON.stringify(updatedState));
  return updatedState;
};

export { todoReducer };
