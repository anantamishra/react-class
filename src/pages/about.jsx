import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

export const About = () => {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`h-screen flex items-center justify-center ${
          theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
        }`}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">React Theme Switcher</h1>
          <button
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
            onClick={toggleTheme}
          >
            Switch to {theme === "light" ? "Dark" : "Light"} Theme
          </button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
