import { IoSunnyOutline } from "react-icons/io5";
import TodoLogo from "../assets/todo-logo.png";

const Navbar = () => {
  return (
    <nav className="py-4 md:py-6 fixed top-0 w-full  z-10 bg-gray-100">
      <div className="flex items-center justify-between px-4">
        <div className="container mx-auto px-4 md:px-6 flex  items-center gap-3">
          <a href="/">
            <h5 className="text-2xl md:text-3xl lg:text-4xl">QTEC TODO</h5>
          </a>
          <img src={TodoLogo} alt="" className="w-12 h-10" />
        </div>
        <div>
          <button className="pr-4 md:pr-8">
            <IoSunnyOutline className="text-2xl" />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
