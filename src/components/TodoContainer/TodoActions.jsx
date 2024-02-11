/* eslint-disable react/prop-types */


const TodoActions = ({ setShowModal, onDeleteAllTodo }) => {
  return (
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
        <button
          onClick={() => setShowModal(true)}
          className="rounded-md bg-green-500 px-2 text-gray-200 hover:text-gray-50 py-1 md:px-4 md:py-2 hover:bg-green-700 transition-all duration-200"
        >
          Add Todo
        </button>
        <button
        onClick={onDeleteAllTodo}
        className="rounded-md bg-red-500 px-2 md:px-4 py-1 md:py-2 hover:bg-red-700 hover:text-gray-100 transition-all duration-200 text-gray-200">
          Delete All Todo
        </button>
      </div>
    </div>
  );
};

export default TodoActions;
