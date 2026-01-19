import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import Projects from "./Projects";

function ProjectPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <Projects />
    </div>
  );
}

export default ProjectPage;
