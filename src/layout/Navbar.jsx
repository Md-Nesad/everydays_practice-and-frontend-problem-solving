import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  return (
    <div>
      <Link to="/home">Go to home page</Link>
      <Link to="/about">Go to about page</Link>

      <button onClick={toggleTheme}>
        Toggle theme {theme === "dark" ? "light" : "dark"}
      </button>
    </div>
  );
}
