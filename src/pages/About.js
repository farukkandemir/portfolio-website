import React from "react";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

function About() {
  return (
    <section
      id="about"
      className="mx-auto min-h-screen w-full max-w-5xl px-3 md:flex  md:w-2/3 "
    >
      <AboutMe />
      <Skills />
    </section>
  );
}

export default About;
