import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
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
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <img src="/icons/three-horizontal-lines-outline-icon.svg" alt="" />
      </button>

      {/* Mobile Navigation */}
      {isNavOpen && (
        <div className="bg-white rounded-[20px] w-[90vw] top-[120px] left-0 absolute md:hidden flex flex-col justify-between items-center gap-y-[1.5rem] py-4">
          <nav className="font-light text-[1rem] flex flex-col items-center justify-between gap-y-[1.5rem]">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">About</NavLink>
            <Link to="https://wa.me/2348123051357">Become a Sponsor</Link>
            <NavLink to="/">Schedule</NavLink>
            <NavLink to="/">Contact</NavLink>
          </nav>
          <button className="bg-black py-2 px-[15px] font-[700] hover:bg-[#9747FF] text-white rounded-[7px]">
            <a href="#ticket">Get Ticket</a>
          </button>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center gap-x-[1rem]">
        <nav className="font-light text-[1rem] flex items-center justify-between gap-x-[.5rem] lg:gap-x-[1rem]">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">About</NavLink>
          <Link to="https://wa.me/2348123051357">Become a Sponsor</Link>
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
