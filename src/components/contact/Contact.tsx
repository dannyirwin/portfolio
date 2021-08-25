import React from 'react';

import './Contact.css';
import ContactBackground from './ContactBackground';
import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';

interface props {
  innerRef: any;
}

export default function Contact({ innerRef }: props) {
  return (
    <section className='Contact' ref={innerRef}>
      <ContactBackground />
      <ContactHeader />
      <div className='contact-form-container'>
        <ContactForm />
      </div>
    </section>
  );
}
