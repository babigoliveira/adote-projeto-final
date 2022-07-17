import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import About from "../pages/About/About";
import FirstSteeps from "../pages/FirstSteeps/FirstSteeps";
import ConsciousEducation from "../pages/ConsciousEducation/ConsciousEducation";
import Contact from "../pages/Contact/Contact";

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Header />
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
