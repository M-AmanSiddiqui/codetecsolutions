// import { useState } from "react";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { FaLocationArrow } from "react-icons/fa6";
// import { FaPhone } from "react-icons/fa6";
// import { GoClockFill } from "react-icons/go";
// import { Link } from "react-router-dom";
// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/send-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setStatus("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setStatus("Failed to send message.");
//       }
//     } catch (error) {
//       setStatus("Error: Unable to send message.");
//     }
//   };
//   const handleMailClick = () => {
//     window.open("https://mail.google.com/mail/?view=cm&fs=1&to=contact@codetecsolutions.com", "_blank");
//   };
//   const openMap = () => {
//     window.open("https://www.google.com/maps?q=3998+E+71st+street,+Cleveland,+Ohio", "_blank");
//   };
//   return (
// <div className="bg-black text-white p-8 overflow-x-hidden">


// <div className="flex-col md:flex-row max-w-8xl mx-auto p-8 flex justify-center items-center  bg-black text-black">
//       {/* Form Section */}

      

//       <div className="w-full md:w-1/2   p-4">
//         <h1 className="text-6xl font-bold text-center mb-16 text-white">GET IN TOUCH</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-4 py-2 rounded-md focus:outline-none"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-2 rounded-md   focus:outline-none"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Write your message here"
//             value={formData.message}
//             onChange={handleChange}
//             rows="5"
//             className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
//             required
//           ></textarea>
//          <button
//   type="submit"
//   className="inline-flex  items-center justify-center bg-[#91BE7F] px-5 border-black hover:bg-black hover:text-[#91BE7F] border-2 hover:border-[#91BE7F] text-base text-black font-bold w-full py-2 rounded-md transition"
// >
//   SEND MESSAGE
// </button>

//         </form>
//         {status && <p className="mt-4 text-center">{status}</p>}
//       </div>
//       </div>
      
//       {/* Map and Contact Section */}
//       <div className="w-full md:w-1/2 p-4 pt-20">
//         <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.246438723071!2d-81.6416915!3d41.4496783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830e4d1a9d4617b%3A0x7831fb1eb114b6ea!2s3998+E+71st+St,+Cleveland,+OH+44105,+USA!5e0!3m2!1sen!2s!4v1672424427297!5m2!1sen!2s"
//         className="w-screen min-h-screen rounded-md border-0"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//         <div className="mt-4 text-center text-sm">
//          <ul className="space-y-2">
//                      <li className="flex items-center space-x-2 text-white">
//                        <FaLocationArrow />
//                        <Link to="#" onClick={handleMailClick}>
//         contact@codetecsolutions.com
//       </Link>
//                      </li>
//                      <li className="flex items-center space-x-2 text-white">
//                      <MdOutlineMailOutline /> <Link to="#" onClick={openMap}>
//         <span>3998 E 71st street, Cleveland, Ohio</span>
//       </Link>
//                      </li>
//                      <li className="flex items-center space-x-2 text-white">
//                        <FaPhone />
//                        <span>Contact: +15128801171</span>
//                      </li>
//                      <li className="flex items-center space-x-2 text-white">
//                        <GoClockFill />
//                        <span>Timing: 10:00am - 8:00pm</span>
//                      </li>
//                    </ul>
//         </div>
//       </div>
//       </div>
//   );
// };

// export default ContactForm;


import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { Link } from "react-router-dom";

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

  const handleMailClick = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=contact@codetecsolutions.com", "_blank");
  };

  const openMap = () => {
    window.open("https://www.google.com/maps?q=3998+E+71st+street,+Cleveland,+Ohio", "_blank");
  };

  return (
    <div className="bg-black text-white p-8 overflow-x-hidden">
      <div className="flex flex-col md:flex-row max-w-8xl mx-auto p-8 justify-center items-center bg-black text-black">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-4 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-white">GET IN TOUCH</h1>
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
              className="w-full px-4 py-2 rounded-md focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
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
      </div>

      {/* Map and Contact Section - moved to second line for larger screens */}
      <div className="w-full mt-8 md:mt-0">
        <div className="relative w-full h-80 md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.246438723071!2d-81.6416915!3d41.4496783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830e4d1a9d4617b%3A0x7831fb1eb114b6ea!2s3998+E+71st+St,+Cleveland,+OH+44105,+USA!5e0!3m2!1sen!2s!4v1672424427297!5m2!1sen!2s"
            className="w-full h-full rounded-md border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="mt-4 text-center text-sm">
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 text-white">
              <FaLocationArrow />
              <Link to="#" onClick={handleMailClick}>
                contact@codetecsolutions.com
              </Link>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <MdOutlineMailOutline />
              <Link to="#" onClick={openMap}>
                <span>3998 E 71st street, Cleveland, Ohio</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <FaPhone />
              <span>Contact: +15128801171</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <GoClockFill />
              <span>Timing: 10:00am - 8:00pm</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
