
import Header from '../Components/Header'
import ContactForm from './Components/ContactForm';
import Footer from '../Components/Footer';
function Contact() {
  return (
    <div className='overflow-x-hidden'>
    <Header />
    <div> 
        <ContactForm /> <Footer />
    </div>
  </div>
  )
}
export default Contact;
