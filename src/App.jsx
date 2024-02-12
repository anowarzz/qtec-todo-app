import { useReducer } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import { TodoContext } from "./context/TodoContext";
import { initialState, todoReducer } from "./reducer/todoReducer";

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <Navbar />
      <HeroSection />
      <TodoContainer />
      <Footer />
      <ToastContainer />
    </TodoContext.Provider>
  );
};

export default App;
