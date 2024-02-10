import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AddTodoModal from "./components/TodoContainer/AddTodoModal";
import TodoContainer from "./components/TodoContainer/TodoContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TodoContainer />
    </div>
  );
};

export default App;
