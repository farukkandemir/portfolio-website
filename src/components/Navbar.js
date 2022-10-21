import React, {useState} from "react";
import logo from "../assets/a2.png";
import {GiHamburgerMenu} from "react-icons/gi";
import {HiOutlineArrowRight} from "react-icons/hi";

function NavBar({open, setOpen}) {
  const navlinks = [
    {id: "I.", name: "Home", href: "#"},
    {id: "II.", name: "About", href: "#about"},
    {id: "III.", name: "Work", href: "#work"},
    {id: "IV.", name: "Experience", href: "#experience"},
    {id: "V.", name: "Contact", href: "#contact"},
  ];

  return (
    <header className="fixed top-0 left-0 z-10 w-full bg-lightBlack ">
      <nav className="md:mx-auto md:flex  md:w-11/12 md:items-center md:justify-between">
        <div className="animate-fadeIn delay-100">
          <a href="#" className="inline-block">
            <img src={logo} alt="" className="w-24 md:w-28 " />
          </a>
        </div>
        <div
          className="absolute top-8 right-8 text-white md:hidden "
          onClick={() => setOpen((prevState) => !prevState)}
        >
          {!open ? (
            <GiHamburgerMenu size="1.7rem" />
          ) : (
            <HiOutlineArrowRight size="1.8rem" />
          )}
        </div>

        <ul
          className={`absolute z-[-1] text-white transition-all duration-700 ease-in-out md:static  md:z-auto md:flex md:h-auto md:items-center md:gap-4  ${
            open
              ? "top-20 h-screen w-full  bg-lightBlack  md:w-auto "
              : "top-[-500px] h-full w-full md:w-auto "
          } `}
        >
          {navlinks.map((link, index) => (
            <li
              key={index}
              className="animate-fadeIn p-2 text-center md:text-base "
              onClick={() => setOpen(false)}
            >
              <a href={link.href} className="py-2 text-lg">
                <span className="text-md block text-red md:inline">{link.id} </span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
