import React from "react";
import logo from "../assets/a2.png";

function Loader() {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black  transition-transform duration-1000 ease-linear">
      <div className="animate-pulse">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Loader;
