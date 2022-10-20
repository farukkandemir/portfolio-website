import React, {useState} from "react";
import CV from "../assets/Cv.pdf";

function HeroSection({open}) {
  const [hover, setHover] = useState(false);
  return (
    <main className="mx-auto h-screen w-full max-w-5xl px-4 pb-40 md:w-2/3">
      <section className="flex h-full flex-col items-start justify-center">
        <div className="mb-4 animate-fadeIn">
          <h1 className=" pl-[5px] text-lg text-gray-100 ">Hi, my name is</h1>
        </div>
        <div className=" animate-fadeIn pb-4">
          <h2 className=" text-4xl md:pb-2 md:text-7xl">
            <span className="text-5xl  tracking-tight text-red md:text-8xl">Faruk </span>
            Kandemir
          </h2>
        </div>
        <div className="pl-[2px] pb-4 text-xl text-gray-300 md:pl-2 md:text-2xl">
          <h3 className="animate-fadeIn ">
            Software Engineer <span>|</span> Jr. Front-End <span>&</span> App Developer
          </h3>
        </div>
        <div className="animate-fadeIn ">
          <p className="pl-[2px] text-gray-400 md:pl-2">
            Self-thought web developer and Computer Science student.
          </p>
        </div>

        <div className={` mt-10 pl-1 md:pl-2 ${open ? "-z-10" : "z-auto"}`}>
          <a
            href={CV}
            className="relative ml-12 cursor-pointer"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            download
          >
            <div
              className={`absolute -bottom-2 mr-2 animate-bounce  rounded-full border-2 border-solid border-red align-middle ${
                hover
                  ? "-bottom-3 h-12 w-52 animate-none transition-all duration-300 ease-in-out"
                  : " h-10 w-10 "
              }`}
            ></div>

            <span className="text-lg ">Download CV</span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
