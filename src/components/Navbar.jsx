import { useContext } from "react";
import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import TodoLogo from "../assets/todo-logo.png";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className={`py-4 md:py-6 w-full  z-10 bg-gray-100 dark:bg-slate-800`}>
      <div className="flex items-center justify-between px-4">
        <div className="container mx-auto px-4 md:px-6 flex  items-center gap-3">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <h5 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              QTEC TODO
            </h5>
          </a>
          <img src={TodoLogo} alt="" className="w-12 h-10" />
        </div>
        <div>
          <button
            onClick={() => setDarkMode((darkMode) => !darkMode)}
            className="pr-4 md:pr-8"
          >
            {darkMode ? (
              <IoSunnyOutline className="text-2xl md:text-3xl" />
            ) : (
              <FiMoon className="text-2xl md:text-3xl" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
