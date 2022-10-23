import React from "react";
import {motion} from "framer-motion";

function Project({project}) {
  return (
    <motion.div
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      exit={{scale: 0, opacity: 0, duration: 0.2}}
      transition={{duration: 0.2, ease: "linear"}}
      className="flex  h-[400px] flex-col items-center justify-center rounded-[2rem] bg-[#1e1e1e] duration-300 ease-in-out hover:bg-inherit hover:transition-all "
    >
      <img
        src={project.href}
        alt="project-image"
        className="h-3/4 w-full  rounded-[2rem] object-cover object-left p-4 "
      />

      <div className="w-full flex-1  pt-4 text-lg ">
        <div className="flex flex-col gap-4 ">
          <p>{project.name}</p>
          <div className="self-start px-2 text-sm">
            <a href={project.github} target="_blank" className="p-2 text-red">
              GitHub
            </a>
            <a href={project.live} target="_blank" className="p-2 text-red">
              Live
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
