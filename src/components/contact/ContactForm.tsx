import React, { useState } from 'react';
import emailJS from 'emailjs-com';
import RedAsterisk from './RedAsterisk';
import { FaAngleDoubleLeft } from 'react-icons/fa';

interface props {
  toggleShowContactForm: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  showContactForm: boolean;
}

export default function ContactForm({
  toggleShowContactForm,
  showContactForm
}: props) {
  const [statusDisplay, setStatusDisplay] = useState<string>('');

  function sendEmail(e: any) {
    e.preventDefault();

    emailJS
      .sendForm(
        'service_iicr66w',
        'template_vuydnsw',
        e.target,
        'user_y3GTGTEVtI3nLXMkd2NOT'
      )
      .then(
        result => {
          console.log(result.text);
          setStatusDisplay(
            "You message has been sent! Thank you, and I'll be in touch shortly."
          );
          e.target.reset();
        },
        error => {
          console.log(error.text);
          setStatusDisplay(
            'Something went wrong. Please email me at dirwin123@gmail.com'
          );
          e.target.reset();
        }
      );
  }
  return (
    <div
      className={`contact-form-container ${showContactForm ? 'visible' : ''}`}
    >
      <form
        className={`ContactForm ${showContactForm ? 'visible' : ''}`}
        onSubmit={sendEmail}
      >
        <div className='input-container'>
          <label htmlFor='name'>
            <RedAsterisk />
            Name:
          </label>
          <input type='text' name='name' required></input>
        </div>
        <div className='input-container'>
          <label htmlFor='email'>
            <RedAsterisk />
            Email:
          </label>
          <input type='email' name='email' required></input>
        </div>
        <div className='input-container'>
          <label htmlFor='company'>Company:</label>
          <input type='text' name='company'></input>
        </div>
        <div className='input-container message-input-container'>
          <label htmlFor='message'>
            <RedAsterisk />
            Message:
          </label>
          <textarea name='message' required></textarea>
        </div>
        <div style={{ color: 'red' }}>*indicates a required field</div>
        <p>{statusDisplay}</p>
        <input type='submit' value='Send Message' />
        <button onClick={toggleShowContactForm}>
          <FaAngleDoubleLeft />
          Go Back
        </button>
      </form>
    </div>
  );
}
