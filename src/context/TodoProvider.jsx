/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer";
import { initialTodo } from "../utils/initialState";

export const TodoContext = createContext();

const initialState = JSON.parse(localStorage.getItem("todos")) || initialTodo;

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
