import React from 'react';

import './About.css';

import AboutMeText from './AboutMeText';
import AboutMeTechs from './AboutMeTechs';
import AboutMeImage from './AboutMeImage';

interface props {
  innerRef: any;
}

export default function About({ innerRef }: props) {
  return (
    <section className='About' ref={innerRef}>
      <div className='about-me-outer-container'>
        <div className='about-me-container'>
          <AboutMeImage />
          <h2>A BIT ABOUT ME</h2>
          <AboutMeText />
          <hr></hr>
          <h3>Some Techs I've used</h3>
          <AboutMeTechs />
        </div>
      </div>
    </section>
  );
}
