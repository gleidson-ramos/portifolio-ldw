import React from 'react'
import './ContactUs.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactUs = () => {
  document.title = "Contato";
  return (
    <section className='contact-container'>
      <h5>Contato</h5>

      <div className='contact-content'>
        <div style={{flex : 1}}>
        <ContactInfoCard
            iconUrl='../email.png'
            text = 'ldw@gmail.com'
          />

          <ContactInfoCard
            iconUrl='../phone.png'
            text = '(71) 0 0000-0000'
          />

        </div>
        <div style={{flex : 1}}>
          <ContactForm/>
        </div>
      </div>
    </section>
  )
}

export default ContactUs