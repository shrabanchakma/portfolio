// NavBar.jsx
import React from "react";

const NavBar = () => (
  <nav className="navbar bg-green-500 text-white w-full fixed z-50 shadow-sm ">
    <div className="container mx-auto px-4 lg:px-24 bg-pink-500 flex justify-between items-center">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black"
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">My Work</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <a
          href="#home"
          className="btn btn-ghost hidden xsm:flex md:text-lg lg:text-xl"
        >
          Shraban Chakma
        </a>
      </div>
      <div className="navbar-center xsm:hidden">
        <a href="#home" className="btn btn-ghost md:text-lg lg:text-xl">
          Shraban Chakma
        </a>
      </div>
      <div className="navbar-center hidden md:flex bg-blue-500">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">My Work</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="hidden xsm:flex navbar-end">
        <a
          href="#projects"
          className="btn bg-[#FEEA3A] text-black hover:bg-[#ffd500]"
        >
          See My Work
        </a>
      </div>
    </div>
  </nav>
);

export default NavBar;
