import { useReducer } from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import { TodoContext } from "./context/TodoContext";
import { todoReducer } from "./reducer/todoReducer";
import { initialTodo } from "./utils/initialState";

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialTodo);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <Navbar />
      <HeroSection />
      <TodoContainer />
      <Footer />
    </TodoContext.Provider>
  );
};

export default App;
