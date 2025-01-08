import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error: Unable to send message.");
    }
  };

  return (
<div className="bg-black text-white p-8">
<h1 className="text-4xl md:text-5xl text-center font-bold font-serif mb-20 underline">
        CONTACT US
      </h1>

    <div className="flex flex-col md:flex-row max-w-8xl mx-auto p-8 bg-black text-white">
      {/* Form Section */}

      

      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-4xl font-bold text-center mb-6">GET IN TOUCH</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md   focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 rounded-md   focus:outline-none"
            required
          ></textarea>
         <button
  type="submit"
  className="inline-flex items-center justify-center bg-[#91BE7F] px-5 border-black hover:bg-black hover:text-[#91BE7F] border-2 hover:border-[#91BE7F] text-base text-black font-bold w-full py-2 rounded-md transition"
>
  SEND MESSAGE
</button>

        </form>
        {status && <p className="mt-4 text-center">{status}</p>}
      </div>

      {/* Map and Contact Section */}
      <div className="w-full md:w-1/2 p-4 pt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.246438723071!2d67.03899697574915!3d24.945797572313634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e527d3bd56b%3A0xb1fdc8b35f575ec9!2sJawwad%20leth%20machine%20works%20Tayyab%20sheikh!5e0!3m2!1sen!2s!4v1672424427297!5m2!1sen!2s"
          className="w-full h-64 rounded-md border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="mt-4 text-center text-sm">
         <ul className="space-y-2">
                     <li className="flex items-center space-x-2 hover:text-[#91BE7F]">
                       <FaLocationArrow />
                       <span>contact@codetecsolutions.com</span>
                     </li>
                     <li className="flex items-center space-x-2 hover:text-[#91BE7F]">
                     <MdOutlineMailOutline />
                       <span>Email: contact@codetecsolutions.com</span>
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
    </div>
    </div>
  );
};

export default ContactForm;
