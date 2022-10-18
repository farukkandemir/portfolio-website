import React from "react";
import {FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa";

function Socials() {
  return (
    <div className="absolute bottom-12 -z-10 flex w-full justify-center gap-6 text-2xl text-white md:bottom-24 md:left-24 md:w-auto md:flex-col ">
      <a href="https://github.com/farukkandemir">
        <FaGithub />
      </a>
      <a href="https://twitter.com/farukkandemir09">
        <FaTwitter />
      </a>
      <a href="https://linkedin.com/farukkandemir">
        <FaLinkedin />
      </a>
      <span className="absolute -bottom-20 left-3 h-12 w-[1px] bg-red "></span>
    </div>
  );
}

export default Socials;
