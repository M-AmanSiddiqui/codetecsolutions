import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
        <h1 className="text-white text-2xl font-semibold tracking-[0.2em]">
          MARK
        </h1>

      
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {/* Replace <a> tags with <Link> */}
          <Link to="/" className="mr-5 text-white hover:text-[#85DD00]">
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

        <button className="inline-flex items-center bg-[#b4f05b] border-0 py-1 px-3 focus:outline-none hover:bg-[#85DD00] rounded text-base mt-4 md:mt-0 text-black">
          Request A Quote
        </button>
      </div>
    </header>
  );
}

export default Header;
