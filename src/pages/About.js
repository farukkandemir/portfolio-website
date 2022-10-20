import React from "react";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

function About() {
  return (
    <section
      id="about"
      className="mx-auto min-h-screen w-11/12 max-w-5xl px-2 md:w-4/5  md:pt-40"
    >
      <AboutMe />
      <Skills />
    </section>
  );
}

export default About;
