import React from 'react';
import Header from '../Components/Header';
import BgHero from './Components/BgHero';  
import Hero from './Components/hero';  
  import HeroCard from './Components/HeroCard';
import TypingCode from './Components/BgTypingCode';
import ServicesCard from './Components/ServicesCard';
import Footer from '../Components/Footer';


function HomePage() {
  return (
    <div>
      <div>
        <Header />
        <BgHero />
        <Hero />
        <HeroCard />
        <TypingCode />
        <ServicesCard />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
