import React from "react";
import logo from "../assets/logo.png";

function Loader() {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black   transition-all duration-700 ease-in-out ">
      <div className="animate-pulse">
        <img src={logo} alt="logo" className="w-48 md:w-96" />
      </div>
    </div>
  );
}

export default Loader;
