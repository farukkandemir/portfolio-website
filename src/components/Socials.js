import React from "react";
import {FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa";

function Socials() {
  return (
    <>
      <div
        className={`invisible bottom-0 flex w-full justify-center  gap-6 text-2xl text-white md:fixed md:bottom-24 md:left-24 md:w-auto md:flex-col lg:visible xl:left-36 `}
      >
        <a
          href="https://github.com/farukkandemir"
          target="_blank"
          className="duration-300 hover:text-red"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/farukkandemir09"
          target="_blank"
          rel="noreferrer"
          className="duration-300 hover:text-red"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/faruk-kandemir/"
          target="_blank"
          rel="noreferrer"
          className="duration-300 hover:text-red"
        >
          <FaLinkedin />
        </a>
        <span className="invisible -bottom-24 left-3 h-16 w-[1px] bg-red lg:visible lg:absolute "></span>
      </div>
      <div className="invisible  fixed bottom-32 right-20 rotate-90 lg:visible">
        <p className="animate-pulse">Scroll Down</p>
        <span className="invisible -bottom-5 -right-16 h-16 w-[1px] rotate-90 bg-red lg:visible lg:absolute"></span>
      </div>
    </>
  );
}

export default Socials;
