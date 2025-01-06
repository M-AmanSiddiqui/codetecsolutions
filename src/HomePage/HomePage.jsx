import React from 'react'
import Header from './Components/Header'
import BgHero from './Components/BgHero';
import Hero from './Components/hero';
import HeroCard from './Components/HeroCard';
function HomePage() {
  return (
    <div>
     <div> <Header /><BgHero /><Hero /> <HeroCard/>  </div>
   
    </div>
  )
}
export default HomePage;
