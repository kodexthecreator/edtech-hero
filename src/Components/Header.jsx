import { useState } from "react";
import React from "react";

import logo from "../assets/CodeIQ.svg";
import python from "../assets/python.svg";
import arrow from "../assets/arrow.svg";
import avatars from "../assets/avatars.svg";
import heroimg from "../assets/hero-img.png";
import { Icons } from "./icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-white pb-20 min-h-screen bg-[url('assets/bg-circle.png')] bg-no-repeat overflow-x-hidden">
      <nav className="flex justify-between items-center lg:mx-14 lg:my-4 mx-4 my-2 lg:py-2 py-3">
        <img src={logo} alt="C-Sports Company Logo" width={54} height={24} />

        {/* Desktop View Navigation */}
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
            {isOpen ? <Icons.Nav /> : <Icons.Close />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
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
      <div className="justify-center items-center flex flex-col lg:flex-row lg:mx-auto lg:mt-20 mx-4 my-2 lg:container">
        {/* Left content section */}
        <div className="justify-center items-center lg:w-1/2 px-4">
          <div className="flex items-center justify-center bg-white/5 md:w-fit rounded-full px-1.5 lg:px-3 py-4 lg:mx-0 lg:w-fit mx-4">
            <img src={avatars} alt="avatars" width={72} />
            <p className="font-sm font-body font-normal">
              500+ students enrolled
            </p>
          </div>

          <div className="mt-2.5">
            <h4 className="font-header text-4xl lg:text-7xl font-medium leading-16 sm:lg-12 lg:text-start text-center lg:leading-24 text-white">
              <span className="relative lg:px-2 px-0.5">
                Online{" "}
                <span className="absolute lg:top-19 top-9 -left-3">
                  <Icons.Line />
                </span>
              </span>
              School for Learning{" "}
              <span className="relative px-2">
                {" "}
                Python
                <span className="absolute sm:visible invisible lg:-top-[2px]  -top-8 left-[12px]">
                  <Icons.Border />
                </span>
                {/* ADDING BORDER VISIBLITY BASED ON MOBILE SCREEN SIZE */}
                <span className="absolute visible sm:invisible  -top-3 left-[12px]">
                  <Icons.Bordersm />
                </span>
              </span>
            </h4>

            <p className="mt-5 font-body text-base text-center lg:text-start">
              Learn from experts, build projects, and get certified.
            </p>

            <div className="flex mt-5 gap-x-4 items-center justify-center lg:justify-start">
              <p className="px-4 py-3 font-body text-base rounded-md bg-primary text-black">
                Enroll Now
              </p>
              <p className="px-4 py-3 font-body text-base rounded-md border-2 border-[#5C5C5A] text-white/80">
                Learn More
              </p>
            </div>

            <div className="flex lg:flex-row flex-col justify-items-center items-center lg:justify-end mt-12 relative">
              {/* Mobile view - revised positioning */}
              <div className="lg:hidden flex w-full h-24 items-center justify-center">
                {/* Scholarship box positioned above the arrow */}
                <div className="border-primary border-r-2 border-b-2 w-fit relative z-50 top-0">
                  <p className="px-4 py-3 font-body bg-white/10 text-white text-base border-[#0A0809] border-r-2 border-b-2">
                    Win $500 in scholarships{" "}
                  </p>
                </div>

                {/* Arrow positioned below */}
                <div className="absolute -z-10 top-10">
                  <Icons.Arrow />
                </div>
              </div>

              {/* Desktop view */}
              <div className="hidden lg:flex lg:flex-row items-center">
                <img src={arrow} alt="" className="lg:-mr-6 -mt-10 z-0" />
                <div className="border-primary border-r-2 border-b-2 w-fit z-10">
                  <p className="px-4 py-3 font-body -mt-6 bg-white/10 text-white text-base border-[#0A0809] border-r-2 border-b-2">
                    Win $500 in scholarships{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right image section */}
        <div className="lg:w-1/2 md:mt-0 mt-12 flex justify-center items-center">
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
