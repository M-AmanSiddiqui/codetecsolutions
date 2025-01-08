import React from 'react'
import AboutHero from "./Component/AboutHero";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import State from './Component/State';

function About() {
  return (
    <div>
    <Header />
    <div className="pt-44"> {/* Adjust padding to account for fixed Header */}
      <AboutHero /><State /><Footer />
    </div>
  </div>
  )
}
export default About;