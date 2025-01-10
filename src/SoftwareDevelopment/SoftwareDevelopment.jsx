import React from 'react'
import Header from '../Components/Header'
import Footer from '..//Components/Footer';
import SoftwareHero from './Component/SoftwareHero';
import ServiceOffer from './Component/ServiceOffer';
import ClientsFeedback from './Component/ClientsFeedback';
 function SoftwareDevelopment() {
  return (
    <div>
    <Header />
    <div className="pt-44"> 
       <SoftwareHero /><ServiceOffer /><ClientsFeedback />
    <Footer />
    </div>
  </div>
  )
}

export default SoftwareDevelopment;

