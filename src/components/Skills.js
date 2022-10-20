import React from "react";

function Skills() {
  const skills = [
    {class: "devicon-javascript-plain", name: "JavaScript"},
    {class: "devicon-html5-plain-wordmark", name: "HTML5"},
    {class: "devicon-css3-plain", name: "CSS"},
    {class: "devicon-tailwindcss-plain", name: "TailwindCss"},
    {class: "devicon-react-original", name: "React"},
    {class: "devicon-nodejs-plain", name: "NodeJs"},
    {class: "devicon-bootstrap-plain", name: "Bootstrap"},
    {class: "devicon-mongodb-plain", name: "MongoDb"},
    {class: "devicon-redux-plain", name: "Redux"},
    {class: "devicon-materialui-plain", name: "MaterialUI"},
  ];

  return (
    <div className="mx-auto w-full md:w-3/4 lg:w-2/3">
      <div>
        <h2 className="mb-4 text-center text-4xl">
          <span className="text-red">Skills </span> & Expertise
        </h2>
        <p>
          <i className="text-gray-300">
            A winner is someone who recognizes his God-given talents, works his tail off
            to develop them into skills, and uses these skills to accomplish his goals.
          </i>
        </p>
        <span className="mx-auto mt-10 block h-1 w-20  bg-red"></span>
      </div>

      <div>
        <div className="mt-6 grid grid-cols-3 gap-3 bg-lightBlack  py-4 md:grid-cols-5 md:gap-6">
          {skills.map((skill, index) => (
            <span key={index} className="  text-center text-gray-100">
              <i className={`${skill.class} mb-4  block text-2xl md:text-6xl`}></i>
              <span className="">{skill.name}</span>
            </span>
          ))}
        </div>
      </div>
      {/* <div className="py-4">
        <h6 className="text-2xl ">
          Check Out My <span className="text-3xl text-red">Skills</span>
        </h6>
      </div>

      <div className="h-72 w-full border-[1px] border-gray-400"></div> */}

      {/* <div className="py-4">
        <h6 className="text-2xl ">
          Check Out My <span className="text-3xl text-red">Skills</span>
        </h6>
      </div>
      <div className="grid grid-cols-5 gap-5 bg-lightBlack py-4">
        {skills.map((skill, index) => (
          <span key={index} className="text-4xl text-slate-200">
            <i className={skill.class}></i>
          </span>
        ))}
      </div> */}
      {/* <div className="mb-4">
        <h6 className="text-2xl">
          Skills I<span className="text-red"> Know</span>
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

export default Skills;
