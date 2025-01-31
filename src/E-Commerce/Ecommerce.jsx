import Header from '../Components/Header'
import Footer from '../Components/Footer';
import BgEcommerce from './Component/BgEcommerce';
import EcommerceHero from './Component/EcommerceHero';
 function Ecommerce() {
  return (
    <div className='overflow-x-hidden'>
    <Header />
    <div> 
       <BgEcommerce />
<EcommerceHero />
    <Footer />
    </div>
  </div>
  )
}

export default Ecommerce;
