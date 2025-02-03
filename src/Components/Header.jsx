// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { FaLocationArrow } from "react-icons/fa";
// import logo from "../assets/Images/logo.jpg";
// import { FaBars, FaTimes } from "react-icons/fa"; 

// import { useSpring, animated } from "@react-spring/web";
// import { useInView } from "react-intersection-observer";


// function Header() {
//   const [isOpen, setIsOpen] = useState(false); // State to toggle the menu visibility

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
   


//   const [mailRef, mailInView] = useInView({ triggerOnce: true });
//   const mailAnimation = useSpring({
//     x: mailInView ? 0 : -200, // Slide from the left
//     opacity: mailInView ? 1 : 0, // Fade in
//     config: { duration: 1000 },
//   });

//     const [addressRef, addressInView] = useInView({ triggerOnce: true });
//     const addressAnimation = useSpring({
//       x: addressInView ? 0 : 200, // Slide from the right
//       opacity: addressInView ? 1 : 0, // Fade in
//       config: { duration: 1000 },
//     });

//   const handleMouseLeave = () => {
//     // Set a timeout to close the dropdown after a small delay (300ms)
//     setTimeout(() => {
//       setIsOpen(false); // Close the dropdown after the delay
//     }, 1500); // 300ms delay
//   };
//   const handleMailClick = () => {
//     window.open("https://mail.google.com/mail/?view=cm&fs=1&to=contact@codetecsolutions.com", "_blank");
//   };
//   const openMap = () => {
//     window.open("https://www.google.com/maps?q=3998+E+71st+street,+Cleveland,+Ohio", "_blank");
//   };
//   return (
//     <header className="text-gray-600 body-font fixed top-0 left-0 w-full bg-black shadow-lg z-50 overflow-hidden"> {/* Ensure z-index is high enough */}
//       {/* Top info section */}
//       <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-slate-200 py-2 px-3">
//       <h2 className="flex items-center gap-2 text-sm md:text-base text-white hover:text-[#91BE7F] hover:border-[#91BE7F]">
//   <animated.div
//     ref={mailRef}
//     style={mailAnimation}
//     className="flex items-center space-x-2"
//   >  <MdOutlineMailOutline  />
//           <Link to="#" onClick={handleMailClick}>
//         contact@codetecsolutions.com
//       </Link> </animated.div>
//         </h2>
//         <h2 className="flex items-center gap-2 text-sm md:text-base text-white hover:text-[#91BE7F] hover:border-[#91BE7F]">
//   <animated.div
//     ref={addressRef}
//     style={addressAnimation}
//     className="flex items-center space-x-2"
//   >
//     <FaLocationArrow />
//     <Link to="#" onClick={openMap}>
//       <span>3998 E 71st street, Cleveland, Ohio</span>
//     </Link>
//   </animated.div>
// </h2>

//       </div>

//       {/* Main Header Content */}
//       <div className="container mx-auto flex flex-wrap p-4 md:flex-row items-center justify-between">
//         {/* Logo */}
//         <Link  className="flex items-center text-gray-900 mb-4 md:mb-0">
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
//           <div className="relative z-50">
//   {/* Navigation Links */}
//   <nav
//     className={`flex flex-col -ml-48 md:flex-row items-center justify-center gap-6 md:gap-8 bg-black text-white fixed `}
//   >
//             <Link
//               to="/"
//               className="text-white hover:text-[#91BE7F] hover:border-b-4 hover:border-[#91BE7F] font-bold"
//             >
//               Home
//             </Link>

//              {/* Services Dropdown */}
//           <div
//             className="relative"
           
//           >
//             <button className="text-lg font-semibold hover:text-gray-300 flex items-center">
//              <Link    to="/Services"
//               onMouseEnter={() => setIsOpen(true)}
//               onMouseOver={() => setIsOpen(true)}
              
//               onMouseLeave={handleMouseLeave}
//               className="text-white hover:text-[#91BE7F] hover:border-b-4 hover:border-[#91BE7F] font-bold"
//              > Services </Link>              <span className="ml-1"
            
//              >&#9662;</span> {/* Downward arrow */}
//             </button>

//             {/* Dropdown Menu */}
//             {isOpen && (
//               <div className="absolute top-full left-0 bg-white text-sm text-black shadow-lg rounded-md w-52 mt-1 z-50">
//                       <Link to="/SoftwareDevelopment" className="block font-semibold px-5 py-4 p-24 hover:bg-black hover:text-[#91BE7F]">
//     Software Development
//   </Link>
            
//                 <Link to="/MobileAppDevelopment" className="block font-semibold px-5 py-4 p-24 hover:bg-black hover:text-[#91BE7F]">
//     Mobile App Development
//   </Link>
//   <Link to="/Ecommerce" className="block font-semibold px-5 py-4 p-24 hover:bg-black hover:text-[#91BE7F]">
//     E-commerce
//   </Link>
//   <Link to="/GraphicDesigning" className="block font-semibold px-5 py-4 p-24 hover:bg-black hover:text-[#91BE7F]">
//     Graphic Designing
//   </Link>
//               </div>
//             )}
//           </div>

//             <Link
//               to="/About"
//               className="text-white hover:text-[#91BE7F] hover:border-b-4 hover:border-[#91BE7F] font-bold"
//             >
//               About Us
//             </Link>
//             <Link
//               to="/Contact"
//               className="text-white hover:text-[#91BE7F] hover:border-b-4 hover:border-[#91BE7F] font-bold"
//             >
//               Contact
//             </Link>
//           </nav>
//         </div></div>
//         {/* Request A Quote Button */}
//         <div className="flex justify-center mt-4 md:mt-0">
//           <Link to="/Contact">
//             <button className="inline-flex items-center bg-[#91BE7F] py-3 px-5 border-black hover:bg-black hover:text-[#91BE7F] border-2 hover:border-[#91BE7F] rounded-lg text-base text-black font-bold">
//               Request A Quote
//             </button>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


import  { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationArrow, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Images/logo.jpg";

 import { motion } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to handle dropdown visibility
  const [isServicesClicked, setIsServicesClicked] = useState(false); // Track if services is clicked

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false); // Close dropdown when the menu is toggled
    setIsServicesClicked(false); // Reset services click state
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsServicesClicked(true); // Mark services as clicked
  };

  

  const handleMailClick = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=contact@codetecsolutions.com", "_blank");
  };

  const openMap = () => {
    window.open("https://www.google.com/maps?q=3998+E+71st+street,+Cleveland,+Ohio", "_blank");
  };

  return (
    <header className="text-gray-600 body-font fixed top-0  left-0 w-full bg-black shadow-lg z-50">
      {/* Top info section */}
      <div className="hidden md:flex flex-col md:flex-row gap-2 justify-center items-center text-slate-200">
  <h2 className="flex items-center gap-2 text-sm md:text-base text-white hover:text-[#91BE7F] hover:border-[#91BE7F] py-2">
    <motion.div
      initial={{ x: -300, opacity: 0 }} // Start animation from the left
      whileInView={{ x: 0, opacity: 1 }} // Animate to the center
      transition={{ duration: 0.7 }} // Animation duration
      className="flex items-center space-x-2"
    >
      <MdOutlineMailOutline />
      <Link to="#" onClick={handleMailClick}>
        contact@codetecsolutions.com
      </Link>
    </motion.div>
  </h2>
  <h2 className="flex items-center gap-2 text-sm md:text-base text-white hover:text-[#91BE7F] hover:border-[#91BE7F] py-2">
    <motion.div
      initial={{ x: 300, opacity: 0 }} // Start animation from the right
      whileInView={{ x: 0, opacity: 1 }} // Animate to the center
      transition={{ duration: 0.7 }} // Animation duration
      className="flex items-center space-x-2"
    >
      <FaLocationArrow />
      <Link to="#" onClick={openMap}>
        <span>3998 E 71st street, Cleveland, Ohio</span>
      </Link>
    </motion.div>
  </h2>
</div>

      {/* Main Header Content */}
      <div className="container mx-auto flex flex-wrap  md:flex-row pt-2  items-center justify-between ">
        {/* Logo */}
        <Link className="flex items-center text-gray-900  md:mb-0 pb-4 ">
          <img
            src={logo}
            alt="Logo"
            className="w-28 h-12 sm:w-36 sm:h-16 md:w-44 md:h-20 lg:w-44 lg:h-20 lg:-mt-1 lg:pb-3 md:pb-3 sm:pb-3 xl:w-56 xl:h-28 mt-3 "
          />
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          {/* Mobile Hamburger Icon */}
          <button onClick={toggleMenu} className="text-white md:hidden block ">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <div className="relative z-50 w-full">
            {/* Navigation Links */}
            <nav
              className={`${
                isOpen ? "flex" : "hidden"
              } flex-col  md:flex-row sm:items-start sm:justify-start bg-black top-20 gap-6 md:gap-8 text-white fixed md:relative md:flex left-0 lg:-mt-24 md:-mt-24  pb-4  w-full `}
            >
              <Link
                to="/"
                className="text-white hover:text-[#91BE7F] sm:hover:border-b-4 sm:hover:border-[#91BE7F] font-bold"
                onClick={() => setIsDropdownOpen(false)} 
              >
                Home
              </Link>
                          {/* Services Dropdown */}
               <div className="relative">
                 <button
                   className="text-lg font-semibold hover:text-gray-300 flex items-center "
                 >
                   <Link to="/Services">
                     <span className="text-white hover:text-[#91BE7F] sm:hover:border-b-4 sm:hover:border-[#91BE7F] font-bold">
                       Services
                     </span>
                   </Link>
                   <span onClick={toggleDropdown} className="ml-1">
                     &#9662;
                   </span>
                 </button>

                     {/* Dropdown Menu */}
                     {isDropdownOpen && (
                  <div className=" absolute sm:absolute sm:text-black sm:bg-white z-50  left-0 bg-black text-sm text-white shadow-lg rounded-md w-52  mt-1">
                    <Link
                      to="/SoftwareDevelopment"
                      className="block font-semibold px-5 py-4 hover:bg-black hover:text-[#91BE7F]"
                    >
                      Software Development
                    </Link>
                    <Link
                      to="/MobileAppDevelopment"
                      className="block font-semibold px-5 py-4 hover:bg-black hover:text-[#91BE7F]"
                    >
                      Mobile App Development
                    </Link>
                    <Link
                      to="/Ecommerce"
                      className="block font-semibold px-5 py-4 hover:bg-black hover:text-[#91BE7F]"
                    >
                      E-commerce
                    </Link>
                    <Link
                      to="/GraphicDesigning"
                      className="block font-semibold px-5 py-4 hover:bg-black hover:text-[#91BE7F]"
                    >
                      Graphic Designing
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/About"
                className="text-white hover:text-[#91BE7F] sm:hover:border-b-4 sm:hover:border-[#91BE7F] font-bold"
                onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
              >
                About Us
              </Link>
              <Link
                to="/Contact"
                className="text-white hover:text-[#91BE7F] sm:hover:border-b-4 sm:hover:border-[#91BE7F] font-bold"
                onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Request A Quote Button (only visible in the mobile menu) */}
        
          <div className="flex justify-center mt-3 md:mt-0">
            <Link to="/Contact">
              <button className="inline-flex items-center  bg-[#91BE7F] p-2 text-xs sm:py-3  sm:px-6  border-black hover:bg-black hover:text-[#91BE7F] border-2 hover:border-[#91BE7F] rounded-lg sm:text-base text-black font-bold">
                Request A Quote
              </button>
            </Link>
          </div>
       
      </div>
    </header>
  );
}

export default Header;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { FaLocationArrow, FaBars, FaTimes } from "react-icons/fa";
// import logo from "../assets/Images/logo.jpg";
// import { motion } from "framer-motion";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false); // State to toggle the menu visibility
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to handle dropdown visibility
//   const [isServicesClicked, setIsServicesClicked] = useState(false); // Track if services is clicked

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     setIsDropdownOpen(false); // Close dropdown when the menu is toggled
//     setIsServicesClicked(false); // Reset services click state
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//     setIsServicesClicked(true); // Mark services as clicked
//   };

//   const handleMouseLeave = () => {
//     setTimeout(() => {
//       if (!isServicesClicked) {
//         setIsDropdownOpen(false); // Close the dropdown after delay if services is not clicked
//       }
//     }, 300);
//   };

//   const handleMailClick = () => {
//     window.open("https://mail.google.com/mail/?view=cm&fs=1&to=contact@codetecsolutions.com", "_blank");
//   };

//   const openMap = () => {
//     window.open("https://www.google.com/maps?q=3998+E+71st+street,+Cleveland,+Ohio", "_blank");
//   };

//   return (
//     <header className="text-gray-600 body-font h-20 pt-2 top-0 sm:h-28 md:h-36 lg:h-44 left-0 w-full bg-black shadow-lg overflow-x-hidden">
//       {/* Top info section */}
//       <div className="hidden md:flex flex-col md:flex-row gap-2 justify-center items-center text-slate-200 py-2">
//   <h2 className="flex items-center gap-2 text-sm md:text-base text-white hover:text-[#91BE7F] hover:border-[#91BE7F]">
//     <motion.div
//       initial={{ x: -300, opacity: 0 }} // Start animation from the left
//       whileInView={{ x: 0, opacity: 1 }} // Animate to the center
//       transition={{ duration: 0.7 }} // Animation duration
//       className="flex items-center space-x-2"
//     >
//       <MdOutlineMailOutline />
//       <Link to="#" onClick={handleMailClick}>
//         contact@codetecsolutions.com
//       </Link>
//     </motion.div>
//   </h2>
//   <h2 className="flex items-center gap-2 text-sm md:text-base text-white hover:text-[#91BE7F] hover:border-[#91BE7F]">
//     <motion.div
//       initial={{ x: 300, opacity: 0 }} // Start animation from the right
//       whileInView={{ x: 0, opacity: 1 }} // Animate to the center
//       transition={{ duration: 0.7 }} // Animation duration
//       className="flex items-center space-x-2"
//     >
//       <FaLocationArrow />
//       <Link to="#" onClick={openMap}>
//         <span>3998 E 71st street, Cleveland, Ohio</span>
//       </Link>
//     </motion.div>
//   </h2>
// </div>


//       {/* Main Header Content */}
//       <div className="container mx-auto flex flex-wrap  md:flex-row pt-2  items-center justify-between ">
//         {/* Logo */}
//         <Link className="flex items-center text-gray-900  md:mb-0">
//           <img
//             src={logo}
//             alt="Logo"
//             className="w-32 h-12 sm:w-36 sm:h-16 md:w-44 lg:-ml-9 md:h-20 lg:w-48 lg:h-24 xl:w-56 xl:h-28"
//           />
//         </Link>

//         <div className="flex   gap-6 md:gap-8 ">
//           {/* Mobile Hamburger Icon */}
//           <button onClick={toggleMenu} className="text-white md:hidden block">
//             {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//           </button>
//           <div className="relative z-50 w-full">
//             {/* Navigation Links */}
//             <nav
//               className={`${
//                 isOpen ? "flex" : "hidden"
//               } flex-col  md:flex-row sm:items-start sm:justify-start bg-black top-20 gap-6 md:gap-8 text-white fixed md:relative md:flex left-0 lg:-mt-24  pb-4  w-full `}
//             >
//               <Link
//                 to="/"
//                 className="text-white hover:text-[#91BE7F] sm:hover:border-b-4 sm:hover:border-[#91BE7F] font-bold"
//                 onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
//               >
//                 Home
//               </Link>

//               {/* Services Dropdown */}
//               <div className="relative">
//                 <button
//                   className="text-lg font-semibold hover:text-gray-300 flex items-center "
//                 >
//                   <Link to="/Services">
//                     <span className="text-white hover:text-[#91BE7F] sm:hover:border-b-4 sm:hover:border-[#91BE7F] font-bold">
//                       Services
//                     </span>
//                   </Link>
//                   <span onClick={toggleDropdown} className="ml-1">
//                     &#9662;
//                   </span>
//                 </button>

//                 {/* Dropdown Menu */}
//                 {isDropdownOpen && (
//                   <div className=" absolute sm:absolute sm:text-black sm:bg-white z-50  left-0 bg-black text-sm text-white shadow-lg rounded-md w-52  mt-1">
//                     <Link
//                       to="/SoftwareDevelopment"
//                       className="block font-semibold px-5 py-4 hover:bg-black hover:text-[#91BE7F]"
//                     >
//                       Software Development
//                     </Link>
//                     <Link
//                       to="/MobileAppDevelopment"
//                       className="block font-semibold px-5 py-4 hover:bg-black hover:text-[#91BE7F]"
//                     >
//                       Mobile App Development
//                     </Link>
//                     <Link
//                       to="/Ecommerce"
//                       className="block font-semibold px-5 py-4 hover:bg-black hover:text-[#91BE7F]"
//                     >
//                       E-commerce
//                     </Link>
//                     <Link
//                       to="/GraphicDesigning"
//                       className="block font-semibold px-5 py-4 hover:bg-black hover:text-[#91BE7F]"
//                     >
//                       Graphic Designing
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               <Link
//                 to="/About"
//                 className="text-white hover:text-[#91BE7F] sm:hover:border-b-4 sm:hover:border-[#91BE7F] font-bold"
//                 onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
//               >
//                 About Us
//               </Link>
//               <Link
//                 to="/Contact"
//                 className="text-white hover:text-[#91BE7F] sm:hover:border-b-4 sm:hover:border-[#91BE7F] font-bold"
//                 onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
//               >
//                 Contact
//               </Link>
//             </nav>
//           </div>
//         </div>

//         {/* Request A Quote Button (only visible in the mobile menu) */}
        
//           <div className="flex justify-center mt-3 md:mt-0">
//             <Link to="/Contact">
//               <button className="inline-flex items-center  bg-[#91BE7F] p-2 text-xs sm:py-4 sm:px-6  border-black hover:bg-black hover:text-[#91BE7F] border-2 hover:border-[#91BE7F] rounded-lg sm:text-base text-black font-bold">
//                 Request A Quote
//               </button>
//             </Link>
//           </div>
       
//       </div>
//     </header>
//   );
// }

// export default Header;
