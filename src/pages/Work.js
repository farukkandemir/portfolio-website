import React, {useEffect, useState} from "react";
import Project from "../components/Project";
import {projects} from "../utils/constant";
import {categories} from "../utils/constant";
import {motion, AnimatePresence, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

function Work() {
  const [projectsList, setProjectsList] = useState(projects);
  const [selected, setSelected] = useState("All");

  const {ref, inView} = useInView({
    threshold: 0.03,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {duration: 1},
      });
    }
    if (!inView) {
      animation.start({opacity: 0});
    }
  }, [inView]);

  function handleFilter(e) {
    if (e.target.name === "All") {
      setProjectsList(projects);
      setSelected("All");
    } else {
      const filteredProjects = projects.filter(
        (project) => project.section === e.target.name
      );
      setProjectsList(filteredProjects);
      setSelected(e.target.name);
    }
  }

  return (
    <section id="work" className="max-w-screen-2xl">
      <div ref={ref}>
        <motion.div animate={animation}>
          <div className="mx-auto w-full  md:w-3/4 lg:w-2/3">
            <div className="text-center">
              <p className="py-4  text-3xl md:text-4xl">
                My Latest <span className="text-red">Work</span>
              </p>
              <i className="text-lightGray">
                I'm looking to expand my portfolio while I'm on top and while I'm young
              </i>
            </div>
            <span className="mx-auto mt-10 block h-1 w-20  bg-red"></span>
          </div>

          <ul className="mx-auto mt-10 flex w-11/12 gap-5 text-lightGray">
            <li>Filter By</li>
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  name={category.name}
                  onClick={handleFilter}
                  className={`${selected === category.name && "bg-red text-white"} px-3`}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>

          <motion.div className="mx-auto  mt-10 grid h-full w-11/12 grid-cols-project-grid gap-10 text-center ">
            <AnimatePresence>
              {projectsList?.map((project, index) => (
                <Project project={project} key={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Work;
