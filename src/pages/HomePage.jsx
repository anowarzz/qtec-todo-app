import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import TodoContainer from "../components/TodoContainer/TodoContainer";
import { ThemeContext } from "../context/ThemeContext";
import TodoProvider from "../context/TodoProvider";
import "../index.css";

const HomePage = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${darkMode ? "dark" : ""} `}>
      <Navbar />
      <HeroSection />

      <TodoProvider>
        <TodoContainer />
      </TodoProvider>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default HomePage;
