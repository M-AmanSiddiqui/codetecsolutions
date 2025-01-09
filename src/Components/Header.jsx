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
  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown after a small delay (300ms)
    setTimeout(() => {
      setIsOpen(false); // Close the dropdown after the delay
    }, 1500); // 300ms delay
  };

  return (
    <header className="text-gray-600 body-font fixed top-0 left-0 w-full bg-black shadow-lg z-50 overflow-hidden"> {/* Ensure z-index is high enough */}
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
        <Link  className="flex items-center text-gray-900 mb-4 md:mb-0">
          <img
            src={logo}
            alt="Logo"
            className="w-28 h-12 sm:w-36 sm:h-16 md:w-44 md:h-20 lg:w-44 lg:h-24 xl:w-56 xl:h-28"
          />
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          {/* Mobile Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="text-white md:hidden block"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <div className="relative z-50">
  {/* Navigation Links */}
  <nav
    className={`flex flex-col -ml-48 md:flex-row items-center justify-center gap-6 md:gap-8 bg-black text-white fixed `}
  >
            <Link
              to="/"
              className="text-white hover:text-[#91BE7F] hover:border-b-4 hover:border-[#91BE7F] font-bold"
            >
              Home
            </Link>

             {/* Services Dropdown */}
          <div
            className="relative"
           
          >
            <button className="text-lg font-semibold hover:text-gray-300 flex items-center">
             <Link    to="/Services"
              className="text-white hover:text-[#91BE7F] hover:border-b-4 hover:border-[#91BE7F] font-bold"
             > Services </Link>              <span className="ml-1"
             onMouseEnter={() => setIsOpen(true)}
             onMouseOver={() => setIsOpen(true)}
             
             onMouseLeave={handleMouseLeave}
             >&#9662;</span> {/* Downward arrow */}
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md w-56 mt-1 z-50">
                <a href="/mobile-app" className="block px-4 py-2 hover:bg-gray-100">
                  Mobile App Development
                </a>
                <a href="/e-commerce" className="block px-4 py-2 hover:bg-gray-100">
                  E-commerce
                </a>
                <a href="/graphic-designing" className="block px-4 py-2 hover:bg-gray-100">
                  Graphic Designing
                </a>
              </div>
            )}
          </div>

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
        </div></div>
        {/* Request A Quote Button */}
        <div className="flex justify-center mt-4 md:mt-0">
          <Link to="/Contact">
            <button className="inline-flex items-center bg-[#91BE7F] py-3 px-5 border-black hover:bg-black hover:text-[#91BE7F] border-2 hover:border-[#91BE7F] rounded-lg text-base text-black font-bold">
              Request A Quote
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;










// import React, { useState } from "react";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative z-50">
//       {/* Navbar */}
//       <nav className="bg-black text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
//         <div className="flex gap-8">
//           <a href="/" className="text-lg font-semibold hover:text-gray-300">
//             Home
//           </a>

        
//           <a href="/about" className="text-lg font-semibold hover:text-gray-300">
//             About
//           </a>
//           <a href="/contact" className="text-lg font-semibold hover:text-gray-300">
//             Contact
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;