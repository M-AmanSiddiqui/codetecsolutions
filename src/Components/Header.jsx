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
  const handleMailClick = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=contact@codetecsolutions.com", "_blank");
  };
  const openMap = () => {
    window.open("https://www.google.com/maps?q=3998+E+71st+street,+Cleveland,+Ohio", "_blank");
  };
  return (
    <header className="text-gray-600 body-font fixed top-0 left-0 w-full bg-black shadow-lg z-50 overflow-hidden"> {/* Ensure z-index is high enough */}
      {/* Top info section */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-slate-200 py-2 px-3">
        <h2 className="flex items-center gap-1 text-sm md:text-base text-white hover:text-[#91BE7F] hover:border-[#91BE7F]">
          <MdOutlineMailOutline  />
          <Link to="#" onClick={handleMailClick}>
        contact@codetecsolutions.com
      </Link>
        </h2>
        <h2 className="flex items-center gap-2 text-sm md:text-base text-white hover:text-[#91BE7F] hover:border-[#91BE7F]">
          <FaLocationArrow />
          <Link to="#" onClick={openMap}>
        <span>3998 E 71st street, Cleveland, Ohio</span>
      </Link>
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
              onMouseEnter={() => setIsOpen(true)}
              onMouseOver={() => setIsOpen(true)}
              
              onMouseLeave={handleMouseLeave}
              className="text-white hover:text-[#91BE7F] hover:border-b-4 hover:border-[#91BE7F] font-bold"
             > Services </Link>              <span className="ml-1"
            
             >&#9662;</span> {/* Downward arrow */}
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-full left-0 bg-white text-sm text-black shadow-lg rounded-md w-52 mt-1 z-50">
                      <Link to="/SoftwareDevelopment" className="block font-semibold px-5 py-4 p-24 hover:bg-black hover:text-[#91BE7F]">
    Software Development
  </Link>
            
                <Link to="/MobileAppDevelopment" className="block font-semibold px-5 py-4 p-24 hover:bg-black hover:text-[#91BE7F]">
    Mobile App Development
  </Link>
  <Link to="/Ecommerce" className="block font-semibold px-5 py-4 p-24 hover:bg-black hover:text-[#91BE7F]">
    E-commerce
  </Link>
  <Link to="/GraphicDesigning" className="block font-semibold px-5 py-4 p-24 hover:bg-black hover:text-[#91BE7F]">
    Graphic Designing
  </Link>
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
// import { Link } from "react-router-dom";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { FaLocationArrow } from "react-icons/fa";
// import logo from "../assets/Images/logo.jpg";
// import { FaBars, FaTimes } from "react-icons/fa"; // Add Hamburger icon and Close icon

// function Header() {
//   const [isOpen, setIsOpen] = useState(false); // State to toggle the menu visibility
//   const [activeLink, setActiveLink] = useState("/"); // Default active link is Home

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleMouseLeave = () => {
//     // Set a timeout to close the dropdown after a small delay (300ms)
//     setTimeout(() => {
//       setIsOpen(false); // Close the dropdown after the delay
//     }, 1500); // 300ms delay
//   };

//   const handleLinkClick = (link) => {
//     setActiveLink(link); // Set the clicked link as active
//   };

//   return (
//     <header className="text-gray-600 body-font fixed top-0 left-0 w-full bg-black shadow-lg z-50 overflow-hidden">
//       {/* Top info section */}
//       <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-slate-200 py-2 px-3">
//         <h2 className="flex items-center gap-1 text-sm md:text-base">
//           <MdOutlineMailOutline />
//           contact@codetecsolutions.com
//         </h2>
//         <h2 className="flex items-center gap-2 text-sm md:text-base">
//           <FaLocationArrow />
//           3998 E 71st street, Cleveland, Ohio
//         </h2>
//       </div>

//       {/* Main Header Content */}
//       <div className="container mx-auto flex flex-wrap p-4 md:flex-row items-center justify-between">
//         {/* Logo */}
//         <Link className="flex items-center text-gray-900 mb-4 md:mb-0">
//           <img
//             src={logo}
//             alt="Logo"
//             className="w-28 h-12 sm:w-36 sm:h-16 md:w-44 md:h-20 lg:w-44 lg:h-24 xl:w-56 xl:h-28"
//           />
//         </Link>

//         <div className="flex items-center gap-6 md:gap-8">
//           {/* Mobile Hamburger Icon */}
//           <button
//             onClick={toggleMenu}
//             className="text-white md:hidden block"
//           >
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
          
//           {/* Navigation Links */}
//           <nav className={`flex flex-col -ml-48 md:flex-row items-center justify-center gap-6 md:gap-8 bg-black text-white fixed`}>
//             <Link
//               to="/"
//               onClick={() => handleLinkClick("/")}
//               className={`text-white hover:text-[#91BE7F] hover:border-b-4 hover:border-[#91BE7F] font-bold ${activeLink === "/" ? "text-[#91BE7F] border-b-4 border-[#91BE7F]" : ""}`}
//             >
//               Home
//             </Link>

//             {/* Services Dropdown */}
//             <div className="relative">
//               <button
//                 className="text-lg font-semibold hover:text-gray-300 flex items-center"
//               >
//                 <Link
//                   to="/Services"
//                   onMouseEnter={() => setIsOpen(true)}
//                   onMouseOver={() => setIsOpen(true)}
//                   onMouseLeave={handleMouseLeave}
//                   onClick={() => handleLinkClick("/Services")}
//                   className={`text-white hover:text-[#91BE7F] hover:border-b-4 hover:border-[#91BE7F] font-bold ${activeLink === "/Services" ? "text-[#91BE7F] border-b-4 border-[#91BE7F]" : ""}`}
//                 >
//                   Services
//                 </Link>
//                 <span className="ml-1"> &#9662;</span> {/* Downward arrow */}
//               </button>

//               {/* Dropdown Menu */}
//               {isOpen && (
//                 <div className="absolute top-full left-0 bg-white text-sm text-black shadow-lg rounded-md w-52 mt-1 z-50">
//                   <Link
//                     to="/"
//                     onClick={() => handleLinkClick("/")}
//                     className="block font-semibold px-5 py-4 hover:bg-black hover:text-[#91BE7F]"
//                   >
//                     Software Development
//                   </Link>
//                   <Link
//                     to="/MobileAppDevelopment"
//                     onClick={() => handleLinkClick("/MobileAppDevelopment")}
//                     className="block font-semibold px-5 py-4 hover:bg-black hover:text-[#91BE7F]"
//                   >
//                     Mobile App Development
//                   </Link>
//                   <Link
//                     to="/Ecommerce"
//                     onClick={() => handleLinkClick("/Ecommerce")}
//                     className="block font-semibold px-5 py-4 hover:bg-black hover:text-[#91BE7F]"
//                   >
//                     E-commerce
//                   </Link>
//                   <Link
//                     to="/GraphicDesigning"
//                     onClick={() => handleLinkClick("/GraphicDesigning")}
//                     className="block font-semibold px-5 py-4 hover:bg-black hover:text-[#91BE7F]"
//                   >
//                     Graphic Designing
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link
//               to="/About"
//               onClick={() => handleLinkClick("/About")}
//               className={`text-white hover:text-[#91BE7F] hover:border-b-4 hover:border-[#91BE7F] font-bold ${activeLink === "/About" ? "text-[#91BE7F] border-b-4 border-[#91BE7F]" : ""}`}
//             >
//               About Us
//             </Link>
//             <Link
//               to="/Contact"
//               onClick={() => handleLinkClick("/Contact")}
//               className={`text-white hover:text-[#91BE7F] hover:border-b-4 hover:border-[#91BE7F] font-bold ${activeLink === "/Contact" ? "text-[#91BE7F] border-b-4 border-[#91BE7F]" : ""}`}
//             >
//               Contact
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
