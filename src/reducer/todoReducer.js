const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    default:
      break;
  }
};

export { todoReducer };
