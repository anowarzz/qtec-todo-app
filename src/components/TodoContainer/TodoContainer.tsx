import React from "react";
import TodoActions from "./TodoActions";
import TodoList from "./TodoList";

const TodoContainer = () => {
  return (
    <div className="container px-2 md:px-4 mx-auto my-8 md:my-16">
      <div className="rounded-lg border-gray-200 border shadow-sm px-4 py-8 md:px-9 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center my-2">
          Your Todo List
        </h1>
        <TodoActions />

        <TodoList />
      </div>
    </div>
  );
};

export default TodoContainer;
