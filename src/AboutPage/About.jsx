import React from 'react'
import AboutHero from "./Component/AboutHero";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import State from './Component/State';

function About() {
  return (
   


<div className="overflow-x-hidden">
  <Header />
  <div>
    <AboutHero />
    <State />
    <Footer />
  </div>
</div>

  )
}
export default About;