import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import { TodoContext } from "./context/TodoContext";
import { initialTodo } from "./utils/initialTodo";

const App = () => {
  const [todos, setTodos] = useState(initialTodo);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <Navbar />
      <HeroSection />
      <TodoContainer />
    </TodoContext.Provider>
  );
};

export default App;
