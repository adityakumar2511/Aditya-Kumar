import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Separator from "./components/Separator";
import ProjectsPage from "./ProjectPage";

function App() {
  return (
    <div className="bg-[#0d1117] min-h-screen">
      <Header />

      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <TechStack />

              <Separator id="about" title="About Me" />
              <About />

              <Separator id="skills" title="Skills" />
              <Skills />

              <Separator id="projects" title="Projects" />
              <Projects />

              <Separator id="experience" title="Experience" />
              <Experience />

              <Separator id="stats" title="GitHub Stats" />
              <GithubStats />

              <Separator id="contact" title="Get in Touch" />
              <Contact />
            </>
          }
        />

        {/* Projects Page Route */}
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
