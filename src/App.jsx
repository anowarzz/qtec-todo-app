import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import TodoProvider from "./context/TodoProvider";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />

      <TodoProvider>
        <TodoContainer />
      </TodoProvider>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
