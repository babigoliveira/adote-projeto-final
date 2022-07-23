import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import About from "../pages/About/About";
import FirstSteeps from "../pages/FirstSteeps/FirstSteeps";
import ConsciousEducation from "../pages/ConsciousEducation/ConsciousEducation";
import Contact from "../pages/Contact/Contact";

import { ThemeContext, themes } from "../contexts/ThemeContext";

function ApplicationRoutes() {
  const switchTheme = (currentTheme, changeTheme) => {
    changeTheme(currentTheme === themes.dark ? themes.light : themes.dark);
  };

  return (
    <BrowserRouter>
      <Header />
      <ThemeContext.Consumer>
        {({ changeTheme, theme }) => (
          <label>
            {theme === themes.dark ? "Dark mode" : "Light mode"}
            <input
              id="themeToggle"
              type="checkbox"
              value={theme === themes.dark}
              onChange={() => switchTheme(theme, changeTheme)}
            />
          </label>
        )}
      </ThemeContext.Consumer>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="primeiros-passos" element={<FirstSteeps />} />
        <Route path="educacao-consciente" element={<ConsciousEducation />} />
        <Route path="contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ApplicationRoutes;
