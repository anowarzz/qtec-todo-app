import React from "react";

const TodoList = ({Todos}) => {

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
            {Todos.map((todo) => (
              <tr key={todo.id} className="border-b border-blue-400 [&>td]:align-baseline [&>td]:px-4 [&>td]:py-4">
                <td>
                  <p>1</p>
                </td>
                <td className="capitalize">ToDo Title</td>
                <td>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore velit obcaecati quisquam ipsa explicabo rerum, vel
                    repellendus iusto ducimus unde autem. Doloremque
                    reprehenderit, explicabo at minima rem delectus iste
                    distinctio.
                  </div>
                </td>
                <td>
                  <p>Completed</p>
                </td>
                <td className="text-center">High</td>
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
