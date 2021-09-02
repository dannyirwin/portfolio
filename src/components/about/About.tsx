import React, { SetStateAction } from 'react';

import './About.css';

import AboutMeText from './AboutMeText';
import AboutMeTechs from './AboutMeTechs';
import AboutMeImage from './AboutMeImage';
import SocialMediaLinks from '../SocialMediaLinks';

interface props {
  innerRef: any;
  setResumeIsVisible: React.Dispatch<SetStateAction<boolean>>;
}

export default function About({ innerRef, setResumeIsVisible }: props) {
  return (
    <section className='About' ref={innerRef}>
      <div className='about-me-image-panel'>
        <AboutMeImage />
      </div>
      <div className='about-me-outer-container'>
        <div className='about-me-container'>
          <div className='about-me-content'>
            <h2>A BIT ABOUT ME</h2>
            <SocialMediaLinks setResumeIsVisible={setResumeIsVisible} />
            <AboutMeText />
            <hr></hr>
            <h3>Some Techs I've used</h3>
            <AboutMeTechs />
          </div>
        </div>
      </div>
    </section>
  );
}
