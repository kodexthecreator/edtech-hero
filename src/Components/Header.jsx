import { useState } from "react";
import React from "react";

import logo from "../assets/CodeIQ.svg";
import python from "../assets/python.svg";
import arrow from "../assets/arrow.svg";
import avatars from "../assets/avatars.svg";
import heroimg from "../assets/hero-img.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-white min-h-screen bg-[url('assets/bg-circle.png')] bg-no-repeat overflow-x-hidden">
      <nav className="flex justify-between items-center lg:mx-14 lg:my-4 mx-4 my-2 lg:py-2 py-3">
        <img src={logo} alt="C-Sports Company Logo" width={54} height={24} />

        {/* Desktop View Navigation - Now positioned for right alignment with image */}
        <div className="hidden md:flex space-x-5 items-center">
          <a
            href="#"
            className="hover:text-neutral-200 text-sm font-body font-medium"
          >
            Home
          </a>

          <a
            href="#"
            className="hover:text-neutral-200 text-white/70 text-sm font-body font-light"
          >
            About
          </a>

          <a
            href="#"
            className="hover:text-neutral-200 text-white/70 text-sm font-body font-light"
          >
            Courses
          </a>

          <a
            href="#"
            className="hover:text-neutral-200 text-white/70 text-sm font-body font-light ml-auto pr-8"
          >
            Pricing
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none transition-transform duration-300"
            aria-label={isOpen ? "CloseMenu" : "OpenMenu"}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 transition-transform duration-300 rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-primary transition-transform duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Now with smooth transition */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 z-50 bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 mt-1 transition-all duration-300 transform ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-4">
          <a
            href="#"
            className="hover:text-neutral-200 text-base font-body font-medium transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-neutral-200 text-base font-body font-light transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-neutral-200 text-base font-body font-light transition-colors duration-300"
          >
            Courses
          </a>
          <a
            href="#"
            className="hover:text-neutral-200 text-base font-body font-light transition-colors duration-300"
          >
            Pricing
          </a>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex lg:mx-auto lg:mt-20 mx-4 my-2 container">
        {/* Left content section - exactly 50% width */}
        <div className="w-1/2 pr-4">
          <div className="flex bg-white/5 space-x-2 rounded-full px-3 py-4 w-fit">
            <img src={avatars} alt="avatars" width={72} />
            <p className="font-sm font-body font-normal">
              500+ students enrolled
            </p>
          </div>

          <div className="mt-2.5">
            <h4 className="font-header text-7xl font-medium text-white">
              <span>Online</span> School for Learning{" "}
              <span className="border-2 border-dashed px-2 -translate-y-1/2 border-[#FBFF48]">
                {" "}
                Python
              </span>
            </h4>

            <p className="mt-5 font-body text-base">
              Learn from experts, build projects, and get certified.
            </p>

            <div className="flex mt-5 gap-x-4">
              <p className="px-4 py-3 font-body text-base rounded-md bg-primary text-black">
                Enroll Now
              </p>
              <p className="px-4 py-3 font-body text-base rounded-md border-2 border-[#5C5C5A] text-white/80">
                Learn More
              </p>
            </div>

            <div className="flex justify-end mt-12">
              <img src={arrow} alt="" className="-mr-6 -mt-4" />
              <div className="border-primary border-r-2 border-b-2">
                <p className="px-4 py-3 font-body bg-white/10 text-white text-base border-[#0A0809] border-r-2 border-b-2">
                  Win $500 in scholarships{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right image section - exactly 50% width */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={heroimg}
            alt="hero image"
            width={450}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
