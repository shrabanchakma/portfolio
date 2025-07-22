// NavBar.jsx
import React from "react";
import { Bounce } from "react-awesome-reveal";
import { NavLink } from "react-router";
import { HashLink, NavHashLink } from "react-router-hash-link";

const NavBar = () => (
  <nav className="navbar px-4 lg:px-0 text-[#000814]  pattern_bg shadow-sm w-full">
    <div className="mx-auto flex justify-between items-center w-11/12 lg:w-10/12 xl:w-8/12 ">
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
              <NavHashLink smooth to="/#">
                Home
              </NavHashLink>
            </li>
            <li>
              <HashLink smooth to="#about">
                About Me
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#projects">
                My Work
              </HashLink>
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
          className="btn btn-ghost hidden xsm:flex md:text-lg lg:text-2xl lg:font-bold"
        >
          Shraban Chakma
        </a>
      </div>
      <div className="navbar-center xsm:hidden">
        <a href="#home" className="btn btn-ghost md:text-lg lg:text-xl">
          Shraban Chakma
        </a>
      </div>
      <div className="navbar-center hidden md:block ">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li>
            <NavHashLink
              smooth
              to="/#"
              className="font-medium text-lg text-gray-600 hover:text-black transition"
            >
              Home
            </NavHashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="#about"
              className="font-medium text-lg text-gray-600 hover:text-black transition"
            >
              About Me
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="#projects"
              className="font-medium text-lg text-gray-600 hover:text-black transition"
            >
              My Work
            </HashLink>
          </li>
          <li>
            <a
              href="#testimonials"
              className="font-medium text-lg text-gray-600 hover:text-black transition"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="font-medium text-lg text-gray-600 hover:text-black transition"
            >
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden xsm:flex xsm:items-end navbar-end">
        <Bounce>
          <HashLink
            to={"#projects"}
            smooth
            className="btn bg-[#ffd60a] text-[#001d3d] hover:bg-[#ffc300]  hover:outline-[#003566] active:outline-offset-4  px-6 py-3 rounded-md transition duration-300"
          >
            See My Work
          </HashLink>
        </Bounce>
      </div>
    </div>
  </nav>
);

export default NavBar;
