import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TodoContext } from "../../context/TodoContext";
import { toastOptions } from "../../utils/toastOptions";
import ConfirmationModal from "../ConfirmationModal";
import AddTodoModal from "./AddTodoModal";
import NoTodoFound from "./NoTodoFound";
import TodoActions from "./TodoActions";
import TodoList from "./TodoList";

const TodoContainer = () => {
  // get todos from context and get the dispatch function
  const { state, dispatch } = useContext(TodoContext);
  const todos = state.todos;

  // state to toggle the Add/Edit Todo Modal
  const [showAddModal, setShowAddModal] = useState(false);

  // state to show and hide the confirmation modal
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // state to store the todo that would be edited
  const [todoToEdit, setTodoToEdit] = useState(null);

  // storing required error messages
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    priority: "",
  });

  // =======> Add or Edit a TODO ========> //
  const handleAddEditTodo = (newTodo, event, isAdd) => {
    event.preventDefault();

    if (
      newTodo.title === "" ||
      newTodo.description === "" ||
      newTodo.priority === ""
    ) {
      return setErrors({
        ...errors,
        title: newTodo.title === "" ? "Title is required" : "",
        description:
          newTodo.description === "" ? "Description is required" : "",
        priority: newTodo.priority === "" ? "Priority is required" : "",
      });
    }

    if (isAdd) {
      dispatch({
        type: "ADD_TODO",
        payload: newTodo,
      });
      toast.success(`Todo added successfully`, toastOptions);
    } else {
      dispatch({
        type: "EDIT_TODO",
        payload: newTodo,
      });
      toast.success(`Todo edited successfully`, toastOptions);
      setTodoToEdit(null);
    }

    handleCloseClick();
  };

  // Editing a todo
  const handleEditTodo = (task) => {
    setTodoToEdit(task);
    setShowAddModal(true);
  };

  // Deleting a Todo
  const handleDeleteTask = (todo) => {
    {
      dispatch({
        type: "DELETE_TODO",
        payload: todo,
      });
      toast.success(`Todo Deleted successfully`, toastOptions);
    }
  };

  // Delete all Todos in one click
  const handleDeleteAllTodo = () => {
    if (todos.length === 0) {
      toast.info(`No Todos Available`, toastOptions);
      setShowConfirmModal(false);
    } else {
      dispatch({
        type: "DELETE_ALL_TODO",
      });
      setShowConfirmModal(false);
      toast.success(`All Todos Deleted successfully`, toastOptions);
    }
  };

  // Closing the add / edit modal
  const handleCloseClick = () => {
    setErrors({
      title: "",
      description: "",
      priority: "",
    });
    setShowAddModal(false);
    setTodoToEdit(null);
  };

  // Closing the confirmation modal
  const handleConfirmModalClose = () => {
    setShowConfirmModal(false);
  };

  return (
    <div className=" px-2 md:px-4 mx-auto my-8 md:my-16">
      {showAddModal && (
        <AddTodoModal
          todoToEdit={todoToEdit}
          errors={errors}
          onSaveTodo={handleAddEditTodo}
          onClose={handleCloseClick}
        />
      )}

      <div className="rounded-lg border-gray-200 border shadow-sm px-4 py-8 md:px-9 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center my-2">
          Your Todo List
        </h1>
        <TodoActions
          onDeleteAllTodo={() => setShowConfirmModal(true)}
          setShowModal={setShowAddModal}
        />

        {todos.length > 0 ? (
          <TodoList
            todos={todos}
            onEditTodo={handleEditTodo}
            onDeleteTodo={handleDeleteTask}
          />
        ) : (
          <NoTodoFound />
        )}

        {showConfirmModal && (
          <ConfirmationModal
            onDeleteConfirm={handleDeleteAllTodo}
            onClose={handleConfirmModalClose}
          />
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
