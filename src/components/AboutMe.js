import React, {useEffect} from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
function AboutMe() {
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
    <div ref={ref} className="mx-auto mb-32  w-full  md:w-3/4 lg:w-2/3">
      <motion.div animate={animation}>
        <div className="py-4 text-center ">
          <h6 className="text-3xl  md:text-4xl ">
            About <p className="inline text-red">Me</p>
          </h6>
        </div>

        <div className="">
          <p>
            Faruk Kandemir, 27 years young, born in Turkey & lives in United States of
            America. At the end of 2021, I began my college career and came across web
            development. Highly motivated creative developer with a passion about learning
            new skills
          </p>
          <span className="mx-auto mt-10 block h-1 w-20  bg-red"></span>
          <p className="mt-6 text-lightGray">
            I am currently a Computer Science student in Community College. I am planning
            to graduate and transfer 4-year college to get my B.S degree
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutMe;
