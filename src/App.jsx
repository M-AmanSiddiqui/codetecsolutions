 import React from "react";
 import ReactDOM from "react-dom/client";
 import { BrowserRouter, Routes, Route, useLocation } from "react-router";
 import HomePage from "./HomePage/HomePage";
 import About from "./AboutPage/About"
 import Services from "./Services/Services";
 import Contact from "./Contact/Contact";
 import GraphicDesigning from "./GraphicDesigning/GraphicDesigning";
 import Ecommerce from "./E-Commerce/Ecommerce"
 import MobileAppDevelopment from "./MobileAppDevelopment/MobileAppDevelopment";
 import SoftwareDevelopment from "./SoftwareDevelopment/SoftwareDevelopment";
 import { useEffect} from "react";
 const root = document.getElementById("root");
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [location]);

  return null;  
}
 ReactDOM.createRoot(root).render(
   <BrowserRouter>
<ScrollToTop />
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/About" element={<About />} />
       <Route path="/Services" element={<Services />} />
       <Route path="/Contact" element={<Contact />} />
       <Route path="/GraphicDesigning" element={< GraphicDesigning />} />
        <Route path="/Ecommerce" element={< Ecommerce />} />
        <Route path="/MobileAppDevelopment" element={< MobileAppDevelopment />} />
        <Route path="/SoftwareDevelopment" element={< SoftwareDevelopment />} />
     </Routes>
   </BrowserRouter>
 );
 export default App;
