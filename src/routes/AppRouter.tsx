import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import { AboutMe, TechnicalSkills, Courses, Works } from "@/pages";

import SoftSkills from "../pages/SoftSkills";
import Certifications from "../pages/Certifications";
import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AboutMe />} />
          <Route path="/habilidades_tecnicas" element={<TechnicalSkills />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/trabajos" element={<Works />} />
          <Route path="/habilidades_blandas" element={<SoftSkills />} />
          <Route path="/certificados" element={<Certifications />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
