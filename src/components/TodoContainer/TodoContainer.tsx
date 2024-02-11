import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TodoContext } from "../../context/TodoContext";
import { toastOptions } from "../../utils/toastOptions";
import AddTodoModal from "./AddTodoModal";
import TodoActions from "./TodoActions";
import TodoList from "./TodoList";

const TodoContainer = () => {
  // state to toggle add todo modal
  const [showModal, setShowModal] = useState(false);

  // get todos from context and get the dispatch function
  const { state, dispatch } = useContext(TodoContext);
  const todos = state.todos;

  // storing required error messages
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    priority: "",
  });

  // =======> Add or Edit a TODO ========> //
  const handleAddEditTodo = (newTodo, event) => {
    event.preventDefault();

    if (newTodo.title === "" || newTodo.description === "" || newTodo.priority === "") {
      return setErrors({
        ...errors,
        title: newTodo.title === "" ? "Title is required" : "",
        description: newTodo.description === "" ? "Description is required" : "",
        priority: newTodo.priority === "" ? "Priority is required" : "",
      });
    }

    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
    toast.success(`Todo added successfully`, toastOptions);

    handleCloseClick();
    setErrors({
      title: "",
      description: "",
      priority: "",
    });
  };

  // Closing the add / edit modal
  const handleCloseClick = () => {
    setErrors({
      title: "",
      description: "",
      priority: "",
    });
    setShowModal(false);
  };

  return (
    <div className=" px-2 md:px-4 mx-auto my-8 md:my-16">
      {showModal && (
        <AddTodoModal
          errors={errors}
          onSaveTodo={handleAddEditTodo}
          setShowModal={setShowModal}
        />
      )}

      <div className="rounded-lg border-gray-200 border shadow-sm px-4 py-8 md:px-9 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center my-2">
          Your Todo List
        </h1>
        <TodoActions setShowModal={setShowModal} />

        <TodoList Todos={todos} />
      </div>
    </div>
  );
};

export default TodoContainer;
