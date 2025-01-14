import React from 'react';
import Header from '../Components/Header';
import BgHero from './Components/BgHero';    
  import HeroCard from './Components/HeroCard';
import TypingCode from './Components/BgTypingCode';
import ServicesCard from './Components/ServicesCard';
import Footer from '../Components/Footer';
import Hero from './Components/Hero';


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
