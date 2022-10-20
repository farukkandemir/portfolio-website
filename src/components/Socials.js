import React, {useState} from "react";
import {FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa";

function Socials({open}) {
  const [scroll, setScroll] = useState("");

  return (
    <>
      <div
        className={`fixed bottom-0 flex w-full  justify-center gap-6 text-2xl text-white md:fixed md:bottom-24 md:left-24 md:w-auto md:flex-col xl:left-36 ${
          open ? "-z-10" : "z-auto"
        }`}
      >
        <a
          href="https://github.com/farukkandemir"
          target="_blank"
          className="duration-300 hover:text-red"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/farukkandemir09"
          target="_blank"
          className="duration-300 hover:text-red"
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com/farukkandemir"
          target="_blank"
          className="duration-300 hover:text-red"
        >
          <FaLinkedin />
        </a>
        <span className="invisible -bottom-24 left-3 h-16 w-[1px] bg-red md:visible md:absolute "></span>
      </div>
      <div className="invisible  fixed bottom-32 right-20 rotate-90 md:visible">
        <p className="animate-pulse">Scroll Down</p>
        <span className="invisible -bottom-5 -right-16 h-16 w-[1px] rotate-90 bg-red md:visible md:absolute"></span>
      </div>
    </>
  );
}

export default Socials;
