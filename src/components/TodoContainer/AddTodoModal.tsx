import React from "react";

const AddTodoModal = ({ setShowModal }) => {
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
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="block min-h-[120px] w-full rounded-md  px-3 py-2.5 lg:min-h-[180px]"
                required
                name="description"
                id="description"
              ></textarea>
            </div>

            <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="priority">Priority</label>
                <select
                  className="block w-full cursor-pointer rounded-md px-3 py-2.5"
                  required
                  name="priority"
                  id="priority"
                >
                  <option value="">Select Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
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
