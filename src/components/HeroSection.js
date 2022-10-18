import React from "react";

function HeroSection() {
  return (
    <main className="mx-auto h-screen w-11/12 max-w-5xl md:w-2/3">
      <section className="flex h-full flex-col items-start justify-center">
        <div className="mb-4 text-lg text-red">
          <h1>Hi, my name is</h1>
        </div>
        <div className="">
          <h2 className="text-8xl">Faruk Kandemir</h2>
        </div>
        <div>
          <h3>
            Software Engineer <span>|</span> Full Stack <span>&</span> App Developer
          </h3>
          <p>I`m a self-thought web developer and Computer Science student.</p>
        </div>
        <div>
          <button className="py-4">Download CV</button>
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
