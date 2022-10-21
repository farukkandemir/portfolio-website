import React from "react";

function AboutMe() {
  console.log(window);

  return (
    <div className="mx-auto mb-32  w-full  md:w-3/4 lg:w-2/3">
      <div className="py-4 text-center ">
        <h6 className="text-3xl  md:text-4xl ">
          About <p className="inline text-red">Me</p>
        </h6>
      </div>

      <div className="">
        <p>
          Faruk Kandemir, 27 years young, born in Turkey & lives in United States of
          America. Highly motivated creative developer with a passion about learning new
          skills
        </p>
        <span className="mx-auto mt-10 block h-1 w-20  bg-red"></span>
        <p className="mt-6 text-lightGray">
          I am currently a Computer Science student at Northampton Community College. I am
          planning to graduate and transfer 4-year college to get my B.S degree
        </p>
      </div>

      {/* <div className="mb-4">
        <h6 className="text-2xl">
          About <span className="text-red">Me</span>
        </h6>
        <div className="w-64 border-[1px] border-solid border-gray-400 md:w-72"></div>
      </div>
      <div>
        <ul className="flex list-disc flex-col gap-4 tracking-tight text-gray-300  marker:text-red md:text-lg">
          <li>Born in Turkey, Lives in United States</li>
          <li>Twenty-seven years of age</li>
          <li>Computer Science student</li>
          <li>Self-thought Developer</li>
          <li>Passionate about coding</li>
          <li>Soccer and Basketball enthusiast</li>
        </ul>
      </div> */}
    </div>
  );
}

export default AboutMe;
