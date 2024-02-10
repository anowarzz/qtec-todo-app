import React from "react";

const TodoContainer = () => {
  return (
    <div className="container px-2 md:px-4 mx-auto my-8 md:my-16">
      <div className="rounded-lg border-gray-300 border shadow-md px-4 py-8 md:px-9 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center my-2">
          Your Todo List
        </h1>
        <div className="flex items-center justify-between mb-6 mt-8 md:lg-8">
          <div>
            <div className="flex items-stretch space-x-4">
              <select
                className="cursor-pointer rounded-md border py-2 px-2 text-center text-gray-800"
                name="sortBy"
                id="sortBy"
              >
                <option value="">Sort by Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="rounded-md bg-green-500 px-2 py-1 md:px-4 md:py-2 ">
              Add ToDo
            </button>
            <button className="rounded-md bg-red-500 px-2 md:px-4 py-1 md:py-2 ">
              Delete All Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
