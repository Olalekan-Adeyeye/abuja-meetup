import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSponsor, setIsSponsor] = useState(false);
  return (
    <header className="relative p-6 md:px-6 py-8  bg-white rounded-[11px] max-w-[1440px] w-[90vw] mx-auto flex justify-between items-center">
      <Link href="https://atcafrica.com">
        <img
          src="/images/atc_logo.svg"
          alt="logo"
          className="w-[130px] sm:w-[130px] lg:w-full  h-[50px] -mt-[10px] md:-mt-[15px]"
        />
      </Link>
      <button
        className="md:hidden w-[30px]"
        onClick={() => {
          setIsSponsor(false);
          setIsNavOpen(!isNavOpen);
        }}
      >
        <img src="/icons/three-horizontal-lines-outline-icon.svg" alt="" />
      </button>

      {/* Mobile Navigation */}
      {isNavOpen && (
        <div className="bg-white rounded-[20px] w-[90vw] top-[120px] left-0 absolute md:hidden flex flex-col justify-between items-center gap-y-[1.5rem] py-4">
          <nav className="font-light text-[1rem] flex flex-col items-center justify-between gap-y-[1.5rem]">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">About</NavLink>
            <p
              onClick={() => {
                setIsNavOpen(false);
                setIsSponsor(true);
              }}
            >
              Sponsor/Volunteer
            </p>
            <NavLink to="/">Schedule</NavLink>
            <NavLink to="/">Contact</NavLink>
          </nav>
          <button className="bg-black py-2 px-[15px] font-[700] hover:bg-[#9747FF] text-white rounded-[7px]">
            <a href="#ticket">Get Ticket</a>
          </button>
        </div>
      )}
      {isSponsor && (
        <div className=" px-4 font-light bg-white rounded-[20px] w-[90vw] top-[120px] left-0 absolute md:hidden flex flex-col justify-between items-center gap-y-[1.5rem] py-4">
          <button
            className=" self-start block"
            onClick={() => {
              setIsSponsor(false);
              setIsNavOpen(true);
            }}
          >
            <img
              src="icons/arrow-thin-chevron-left-icon.svg"
              alt=""
              className="w-[8px]"
            />
          </button>
          <Link to="https://wa.me/2348123051357">Sponsor</Link>
          <Link to="https://docs.google.com/forms/u/0/d/e/1FAIpQLScYPow1dFxjQ48E_qerb0RL5fYd1IV9YE02_tDCQ6ZsJGO60Q/closedform">
            Volunteer
          </Link>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center gap-x-[1rem]">
        <nav className="font-light text-[1rem] flex items-center justify-between gap-x-[.5rem] lg:gap-x-[1rem]">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">About</NavLink>
          <div className="text-center about-wrapper cursor-pointer relative">
            <span className="flex gap-[1px]">
              Sponsor/Volunteer
              <img src="/icons/arrow-up.svg" alt="" className="about-arrow" />
            </span>

            <span className="drop-down absolute top-2 w-max -left-[5px]">
              <ul className="flex flex-col gap-2 mt-8 shadow-[0_0_5px_-0px_rgba(0,0,0,0.3)] rounded-[8px] w-[170px] px-4 py-2 z-[5555] bg-white">
                <li className="hover:bg-gray-300 py-1 px-2 rounded-[4px]">
                  <Link to="https://wa.me/2348123051357">Sponsor</Link>
                </li>
                <li className="bg-[#DADADA] h-[1px]"></li>
                <li className="hover:bg-gray-300 py-1 px-2 rounded-[4px]">
                  <Link to="https://docs.google.com/forms/u/0/d/e/1FAIpQLScYPow1dFxjQ48E_qerb0RL5fYd1IV9YE02_tDCQ6ZsJGO60Q/closedform">
                    Volunteer
                  </Link>
                </li>
              </ul>
            </span>
          </div>
          <NavLink to="/">Schedule</NavLink>
          <NavLink to="/">Contact</NavLink>
        </nav>
        <button className="bg-black py-2 px-[15px] font-[700] hover:bg-[#9747FF] text-white rounded-[7px]">
          <a href="#ticket">Get Ticket</a>
        </button>
      </div>
    </header>
  );
};

export default Header;
