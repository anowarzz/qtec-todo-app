import React from "react";

const TodoList = () => {
  return (
    <div>
      <div className="overflow-auto">
        <table className="table-fixed overflow-auto xl:w-full">
          <thead>
            <tr>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-12 "></th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-24">
                Todo Title
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                Description
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-24">
                Status
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-24">
                {" "}
                Priority{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-24">
                {" "}
                Actions
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
