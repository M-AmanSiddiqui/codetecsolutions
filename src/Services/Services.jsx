import React from 'react'
import Header from '../Components/Header'
import Footer from '..//Components/Footer';
import BgService from './Compoents/BgService';
import ServiceHero from './Compoents/ServiceHero';
function Services() {
  return (
    <div>
    <Header />
    <div> 
        <BgService />
        <ServiceHero />
    <Footer />
    </div>
  </div>
  )
}
export default Services;
