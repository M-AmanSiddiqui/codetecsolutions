import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import BgEcommerce from './Component/BgEcommerce';
import EcommerceHero from './Component/EcommerceHero';
 function Ecommerce() {
  return (
    <div>
    <Header />
    <div className="pt-44"> 
       <BgEcommerce />
<EcommerceHero />
    <Footer />
    </div>
  </div>
  )
}

export default Ecommerce;
