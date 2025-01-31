
import Header from '../Components/Header'
import Footer from '..//Components/Footer';
import BgAppHero from './Component/BgAppHero';
import AppHero from './Component/AppHero';
 function MobileAppDevelopment() {
  return (
    <div className='overflow-x-hidden'>
    <Header />
    <div> 
     <BgAppHero /><AppHero />
    <Footer />
    </div>
  </div>
  )
}

export default MobileAppDevelopment;

