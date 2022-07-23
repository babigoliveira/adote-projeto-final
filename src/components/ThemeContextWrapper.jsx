import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "../contexts/ThemeContext";

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.light);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.remove("dark");
        break;
      case themes.dark:
      default:
        document.body.classList.add("dark");
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
