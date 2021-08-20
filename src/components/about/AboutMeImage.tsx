import React from 'react';

import image from '../../images/me.jpeg';

export default function AboutMeImage() {
  return (
    <div className='image-container'>
      <img className='AboutMeImage' src={image} alt='My Face!'></img>
    </div>
  );
}
