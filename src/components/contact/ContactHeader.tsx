import React, { MouseEvent } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

interface props {
  toggleShowContactForm: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ContactHeader({ toggleShowContactForm }: props) {
  console.log('hi');
  return (
    <div className='ContactHeader'>
      <button onClick={toggleShowContactForm}>
        <h2>
          <FaTelegramPlane />
          Get in touch!
        </h2>
      </button>
      <hr></hr>
      <p>or send an email to dirwin123@gmail.com</p>
    </div>
  );
}
