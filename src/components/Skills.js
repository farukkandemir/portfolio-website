import {motion, useAnimation} from "framer-motion";
import React, {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {skills} from "../utils/constant";

function Skills() {
  const {ref, inView} = useInView({
    threshold: 0.1,
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

  return (
    <div className="mx-auto w-full md:w-3/4 lg:w-2/3">
      <div ref={ref}>
        <motion.div animate={animation}>
          <div>
            <h2 className="mb-4 text-center text-4xl">
              <span className="text-red">Skills </span> & Expertise
            </h2>
            <p>
              <i className="text-lightGray">
                A winner is someone who recognizes his God-given talents, works his tail
                off to develop them into skills, and uses these skills to accomplish his
                goals.
              </i>
            </p>
            <span className="mx-auto mt-10 block h-1 w-20  bg-red"></span>
          </div>

          <div>
            <div className="mt-6 grid grid-cols-3 gap-3 bg-lightBlack  py-4 md:grid-cols-5 md:gap-6">
              {skills.map((skill, index) => (
                <span key={index} className="  text-center ">
                  <i className={`${skill.class} mb-4  block text-4xl md:text-6xl`}></i>
                  <span className="">{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
