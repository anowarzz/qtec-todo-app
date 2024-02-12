import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import { ThemeContext } from "./context/ThemeContext";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <HomePage />
    </ThemeContext.Provider>
  );
};

export default App;
