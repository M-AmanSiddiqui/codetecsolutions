import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./HomePage/HomePage";
import About from "./AboutPage/About"
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import GraphicDesigning from "./GraphicDesigning/GraphicDesigning";
import Ecommerce from "./E-Commerce/Ecommerce"
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/About" element={<About />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/GraphicDesigning" element={< GraphicDesigning />} />
       <Route path="/Ecommerce" element={< Ecommerce />} />
    </Routes>
  </BrowserRouter>
);
export default App;