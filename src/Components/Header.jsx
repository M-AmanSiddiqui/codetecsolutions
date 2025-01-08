import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import logo from "../assets/Images/logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa"; // Add Hamburger icon and Close icon


function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-gray-600 body-font fixed top-0 left-0 w-full bg-black shadow-lg z-10 overflow-hidden">
      {/* Top info section */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-slate-200 py-2 px-3">
        <h2 className="flex items-center gap-1 text-sm md:text-base">
        <MdOutlineMailOutline />
          contact@codetecsolutions.com
        </h2>

        <h2 className="flex items-center gap-2 text-sm md:text-base">
          <FaLocationArrow />
          3998 E 71st street, Cleveland, Ohio
        </h2>
      </div>

      {/* Main Header Content */}
      <div className="container mx-auto flex flex-wrap p-4 md:flex-row items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center text-gray-900 mb-4 md:mb-0">
  <img
    src={logo}
    alt="Logo"
    className="w-28 h-12 sm:w-36 sm:h-16 md:w-44 md:h-20 lg:w-44 lg:h-24 xl:w-56 xl:h-28"
  />
</Link>


        {/* Navigation */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* Mobile Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="text-white md:hidden block"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Navigation Links */}
          <nav
            className={`flex flex-col md:flex-row items-center text-base justify-center gap-6 md:gap-8 md:flex md:block ${isOpen ? "block" : "hidden"} md:block`}
          >
            <Link
              to="/"
              className="text-white hover:text-[#91BE7F] hover:border-b-4 hover:border-[#91BE7F] font-bold"
            >
              Home
            </Link>
            <Link
              to="/Services"
              className="text-white hover:text-[#91BE7F] hover:border-b-4 hover:border-[#91BE7F] font-bold"
            >
              Services
            </Link>
            <Link
              to="/About"
              className="text-white hover:text-[#91BE7F] hover:border-b-4 hover:border-[#91BE7F] font-bold"
            >
              About Us
            </Link>
            <Link
              to="/Contact"
              className="text-white hover:text-[#91BE7F] hover:border-b-4 hover:border-[#91BE7F] font-bold"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Request A Quote Button */}
        <div className="flex justify-center mt-4 md:mt-0">
          <Link to="/Contact"><button className="inline-flex items-center bg-[#91BE7F] py-3 px-5 border-black hover:bg-black hover:text-[#91BE7F] border-2 hover:border-[#91BE7F] rounded-lg text-base text-black font-bold">
            Request A Quote
          </button></Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
