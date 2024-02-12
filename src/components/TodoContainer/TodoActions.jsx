/* eslint-disable react/prop-types */

const TodoActions = ({ setShowModal, onDeleteAllTodo, onFilterTodo }) => {
  return (
    <div className="flex items-center justify-between mb-6 mt-8 md:lg-8">
      <div>
        <div className="flex items-stretch space-x-4">
          <select
            onChange={(e) => onFilterTodo(e.target.value)}
            className="cursor-pointer rounded-md border w-5/6 md:w-auto py-2 px-2 text-center text-gray-800"
            name="filterBy"
            id="filterBy"
          >
            <option value="">Filter by Priority - All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setShowModal(true)}
          className="rounded-md text-sm md:text-base bg-green-500 px-2 text-gray-200 hover:text-gray-50 py-1 md:px-4 md:py-2 hover:bg-green-700 transition-all duration-200"
        >
          Add Todo
        </button>
        <button
          onClick={onDeleteAllTodo}
          className="rounded-md  text-sm md:text-base bg-red-500 px-2 md:px-4 py-1 md:py-2 hover:bg-red-700 hover:text-gray-100 transition-all duration-200 text-gray-200"
        >
          Delete All Todos
        </button>
      </div>
    </div>
  );
};

export default TodoActions;
