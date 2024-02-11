/* eslint-disable react/prop-types */

import { useState } from "react";

const AddTodoModal = ({ setShowModal, onSaveTodo, errors, todoToEdit }) => {
  // Storing the todo field values
  const [todo, setTodo] = useState(
    todoToEdit || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      priority: "",
      isCompleted: false,
    }
  );

  // Handling the input field values
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setTodo({
      ...todo,
      [name]: value,
    });
  };

  // checking if the action is add or edit
  const isAdd = !todoToEdit;

  // // storing the todo in the local storage
  // const storeTodo = (todo) => {
  //   let todos = localStorage.getItem("todos");
  //   if (todos) {
  //     todos = JSON.parse(todos);
  //     todos.push(todo);
  //     localStorage.setItem("todos", JSON.stringify(todos));
  //   } else {
  //     localStorage.setItem("todos", JSON.stringify([todo]));
  //   }

  return (
    <div>
      <div className=" w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-400 bg-opacity-80 bg-blur-xl">
        <form className="mx-auto my-10 w-full h-auto transform scale-75  md:scale-90  max-w-[740px]   rounded-xl border bg-gray-100 p-9 max-md:px-4 lg:my-20 lg:p-11">
          <h2 className="mb-9 text-center text-2xl font-bold lg:mb-8 lg:text-[28px]">
            Create Todo
          </h2>

          <div className="space-y-1 lg:space-y-10">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="title">Title</label>
              <input
                className="block w-full rounded-md  px-3 py-2.5"
                required
                type="text"
                name="title"
                id="title"
                value={todo.title}
                onChange={handleChange}
              />
              {errors?.title && (
                <p className="text-sm text-red-500">{errors.title}</p>
              )}
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="block min-h-[120px] w-full rounded-md  px-3 py-2.5 lg:min-h-[180px]"
                required
                name="description"
                id="description"
                value={todo.description}
                onChange={handleChange}
              ></textarea>
              {errors?.description && (
                <p className="text-sm text-red-500">{errors.description}</p>
              )}
            </div>

            <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="priority">Priority</label>
                <select
                  className="block w-full cursor-pointer rounded-md px-3 py-2.5"
                  required
                  name="priority"
                  id="priority"
                  value={todo.priority}
                  onChange={handleChange}
                >
                  <option value="">Select Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                {errors?.priority && (
                  <p className="text-sm text-red-500">{errors.priority}</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-between gap-4 lg:mt-10">
            <button
              onClick={() => setShowModal(false)}
              className="rounded bg-red-600 text-white/80 px-4 py-2 transition-all hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={(e) => onSaveTodo(todo, e, isAdd)}
              type="submit"
              className="rounded bg-green-600 text-white/80 px-4 py-2 transition-all hover:text-white"
            >
              Create New Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodoModal;
