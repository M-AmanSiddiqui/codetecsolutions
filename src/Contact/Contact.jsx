import React from 'react'
import Header from '../Components/Header'
import ContactForm from './Components/ContactForm';
import Footer from '../Components/Footer';
function Contact() {
  return (
    <div>
    <Header />
    <div> 
        <ContactForm /> <Footer />
    </div>
  </div>
  )
}
export default Contact;
