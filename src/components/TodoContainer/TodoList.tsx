import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { getPriorityClass } from "../../utils/getPriorityClass";

const TodoList = ({ onEdit, onDelete }) => {
  const { state } = useContext(TodoContext);
  const Todos = state.todos;

  return (
    <div>
      <div className="overflow-auto">
        <table className="table-fixed overflow-auto xl:w-full">
          <thead>
            <tr>
              <th className="p-4 pb-8 text-sm font-semibold  w-8 "></th>
              <th className="p-4 pb-8 text-sm font-semibold  w-48">
                Todo Title
              </th>
              <th className="p-4 pb-8 text-sm font-semibold w-full  md:w-3/6">
                Description
              </th>
              <th className="p-4 pb-8 text-sm font-semibold  md:w-24">
                Status
              </th>
              <th className="p-4 pb-8 text-sm font-semibold  md:w-24">
                Priority
              </th>
              <th className="p-4 pb-8 text-sm font-semibold  md:w-24">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {Todos?.map((todo, i) => (
              <tr
                key={todo.id}
                className="border-b border-blue-400 [&>td]:align-baseline [&>td]:px-4 [&>td]:py-4"
              >
                <td>
                  <p>{i + 1}</p>
                </td>
                <td className="capitalize ">{todo.title}</td>
                <td>
                  <p>{todo.description}</p>
                </td>
                <td className="text-sm ">
                  {todo.isCompleted && (
                    <button className="bg-blue-500 hover:bg-blue-700 hover:text-white text-white/80 px-1 rounded-md">
                      Completed
                    </button>
                  )}

                  {!todo.isCompleted && (
                    <button className="bg-red-500 text-white/80 px-1 rounded-md ">
                      Incomplete
                    </button>
                  )}
                </td>
                <td
                  className={`text-center text-sm font-semibold ${getPriorityClass(
                    todo.priority
                  )}`}
                >
                  {todo.priority}
                </td>
                <td>
                  <div className="flex items-center   justify-center space-x-3">
                    <button
                      onClick={() => onDelete(todo)}
                      className="bg-red-500 hover:bg-red-700 hover:text-white/90 p-1 px-2"
                    >
                      Delete
                    </button>
                    <button 
                    onClick={() => onEdit(todo)}
                    className="bg-gray-300 hover:bg-gray-500 hover:text-gray-100 p-1 px-2">
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
