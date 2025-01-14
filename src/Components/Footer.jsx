import React from "react";
import Logo from "../assets/Images/logo.jpg";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const handleMailClick = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=contact@codetecsolutions.com", "_blank");
  };
  const openMap = () => {
    window.open("https://www.google.com/maps?q=3998+E+71st+street,+Cleveland,+Ohio", "_blank");
  };
  return (
    <footer className="bg-black text-white py-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <div className="rounded-full -mt-6">
              <img
                src={Logo} // Replace with the actual logo path
                alt="CodeTec Solutions Logo"
                className="h-20 w-44"
              />
            </div>
          </div>
          <p className="text-md">
            <span className="font-bold">CodeTec Solutions</span> is an innovative, <br /> reliable, and user-focused
            digital <br /> solutions company delivering <br /> scalable, modern, and impactful <br /> projects.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 text-4xl mt-6">
            <Link to="#" className="text-white hover:text-[#91BE7F]">
              <FaFacebookSquare />
            </Link>
            <Link to="#" className="text-white hover:text-[#91BE7F]">
              <FaInstagramSquare />
            </Link>
            <Link to="#" className="text-white hover:text-[#91BE7F]">
              <FaTwitterSquare />
            </Link>
            <Link to="#" className="text-white hover:text-[#91BE7F]">
              <FaLinkedin />
            </Link>
          </div>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="font-bold uppercase mb-4">Products</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/SoftwareDevelopment" className="hover:text-[#91BE7F]">
                Software Development
              </Link>
            </li>
            <li>
              <Link to="/MobileAppDevelopment" className="hover:text-[#91BE7F]">
                Mobile App Development
              </Link>
            </li>
            <li>
              <Link to="/Ecommerce" className="hover:text-[#91BE7F]">
               E-commerce
              </Link>
            </li>
           
            <li>
              <Link to="/GraphicDesigning"className="hover:text-[#91BE7F]">
                Graphics Designing
              </Link>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h3 className="font-bold uppercase mb-4">About</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/About" className="hover:text-[#91BE7F]">
                About
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-[#91BE7F]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Details Section */}
        <div>
          <h3 className="font-bold uppercase mb-4">Details</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 hover:text-[#91BE7F]">
              <FaLocationArrow /><Link to="#" onClick={openMap}>
        <span>3998 E 71st street, Cleveland, Ohio</span>
      </Link>
            </li>
            <li className="flex items-center space-x-2 hover:text-[#91BE7F]">
            <MdOutlineMailOutline />
           <Link to="#" onClick={handleMailClick}>
                  contact@codetecsolutions.com
                </Link>
            </li>
            <li className="flex items-center space-x-2 hover:text-[#91BE7F]">
              <FaPhone />
              <span>Contact: +15128801171</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-[#91BE7F]">
              <GoClockFill />
              <span>Timing: 10:00am - 8:00pm</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
