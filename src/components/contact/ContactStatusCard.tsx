import React from 'react';

interface props {
  toggleShowContactForm: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  message: string;
}

export default function ContactStatusCard({
  toggleShowContactForm,
  message
}: props) {
  return (
    <div className='ContactStatusCard'>
      <p>{message}</p>
      <button className='go-back-btn' onClick={toggleShowContactForm}>
        Go Back
      </button>
    </div>
  );
}
