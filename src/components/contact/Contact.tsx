import React, { MouseEvent, SyntheticEvent, useState } from 'react';

import './Contact.css';
import ContactBackground from './ContactBackground';
import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';

interface props {
  innerRef: any;
}

export default function Contact({ innerRef }: props) {
  const [showContactForm, setShowContactForm] = useState<boolean>(false);

  const toggleShowContactForm = (
    event?: React.MouseEvent<HTMLButtonElement>
  ) => {
    event && event.preventDefault();
    setShowContactForm(!showContactForm);
  };

  return (
    <section className='Contact' ref={innerRef}>
      <ContactBackground />
      <ContactHeader toggleShowContactForm={toggleShowContactForm} />
      <ContactForm
        toggleShowContactForm={toggleShowContactForm}
        showContactForm={showContactForm}
      />
    </section>
  );
}
