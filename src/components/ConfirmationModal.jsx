/* eslint-disable react/prop-types */
const ConfirmationModal = ({ onClose, onDeleteConfirm }) => {
  return (
    <div className=" w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ">
      <div className="mx-auto my-10 w-4/5 md:w-96 lg:min-w-[540px] h-auto transform   rounded-xl bg-gray-200 bg-opacity-80 bg-blur-xl p-9 max-md:px-4 lg:my-10 ">
        <h2 className="mb-9 text-center text-2xl font-bold  lg:mb-8 lg:text-[28px]">
          Are You Sure To Delete All Todos ?
        </h2>

        <div className="mt-16 flex justify-between gap-4 lg:mt-10">
          <button
            onClick={onClose}
            className="rounded bg-blue-500 hover:bg-blue-700 hover:text-white/80 px-4 py-2  transition-all hover:opacity-80"
          >
            Cancel
          </button>
          <button
            onClick={onDeleteConfirm}
            className="rounded bg-red-500 px-4 py-2 hover:bg-red-700 hover:text-white/80 transition-all hover:opacity-80"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
