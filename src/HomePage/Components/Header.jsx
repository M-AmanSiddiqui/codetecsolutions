import React from "react";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa6";
import logo from "../../assets/Images/Echo Desk.png";

function Header() {
  return (
    <header className="text-gray-600 body-font fixed top-0 left-0 w-full bg-black z-10 shadow-lg">
      <div className="flex gap-8 justify-center items-center text-slate-200 py-2">
        <h2 className="flex items-center gap-2">
          <CiMail />
          info@codetechsolutions.com
        </h2>

        <h2 className="flex items-center gap-2">
          <FaLocationArrow />
          H No R-699 Sector 15-A 4 BufferZone Karachi
        </h2>
      </div>

      <div className="container mx-auto flex flex-wrap flex-col p-6 md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="Custom Icon" className="w-25 h-20" />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {/* Replace <a> tags with <Link> */}
          <Link to="/" className="mr-8 text-white hover:text-[#85DD00]">
            Home
          </Link>
          <Link to="/second" className="mr-5 text-white hover:text-[#85DD00]">
            Services
          </Link>
          <Link to="/third" className="mr-5 text-white hover:text-[#85DD00]">
            About Us
          </Link>
          <Link to="/fourth" className="mr-5 text-white hover:text-[#85DD00]">
            Contact
          </Link>
        </nav>
        <button className="inline-flex items-center bg-[#b4f05b] border-0 py-3 px-3 focus:outline-none hover:bg-[#85DD00] rounded-lg text-base mt-4 md:mt-0 text-black">
          Request A Quote
        </button>
      </div>
    </header>
  );
}

export default Header;
