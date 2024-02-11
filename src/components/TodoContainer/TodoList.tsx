import React from "react";
import { getPriorityClass } from "../../utils/getPriorityClass";

const TodoList = ({ Todos }) => {
  console.log(Todos);



  return (
    <div>
      <div className="overflow-auto">
        <table className="table-fixed overflow-auto xl:w-full">
          <thead>
            <tr>
              <th className="p-4 pb-8 text-sm font-semibold  w-12 "></th>
              <th className="p-4 pb-8 text-sm font-semibold  w-48">
                Todo Title
              </th>
              <th className="p-4 pb-8 text-sm font-semibold  w-full">
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
                <td className="">
                  <p>{todo.description}</p>
                </td>
                <td className="text-sm ">
                  {todo.isCompleted && (
                    <button className="bg-blue-500 text-white/80 p-1 rounded-md">
                      Completed
                    </button>
                  )}

                  {!todo.isCompleted && (
                    <button className="bg-red-500 p-1 rounded-md ">
                      Incomplete
                    </button>
                  )}
                </td>
                <td
                  className={`text-center text-sm ${getPriorityClass(
                    todo.priority
                  )}`}
                >
                  {todo.priority}
                </td>
                <td>
                  <div className="flex items-center justify-center space-x-3">
                    <button className="text-red-600 font-bold">Delete</button>
                    <button className="text-blue-500 font-bold">Edit</button>
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
