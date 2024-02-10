import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TaskContainer from "./components/TaskContainer/TaskContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TaskContainer />
    </div>
  );
};

export default App;
