import React from 'react';

import { FaAngleDoubleRight } from 'react-icons/fa';

interface props {
  sectionRefs: { section: string; ref: any }[];
  scrollTo: (element: any) => void;
}

export default function WelcomeCard({ sectionRefs, scrollTo }: props) {
  return (
    <div className='WelcomeCard'>
      <div className='welcome-card-inner'>
        <div className='welcome-text'>
          <p>Hello, I'm</p>
          <p className='my-name'>Danny Irwin</p>
        </div>
        <div className='welcome-text'>I'm a full-stack web developer.</div>
        <hr></hr>
        <div className='welcome-nav-container'>
          <button
            className='welcome-nav-btn'
            onClick={() => scrollTo(sectionRefs[0].ref)}
          >
            <p>About Me</p>
            <FaAngleDoubleRight />
          </button>
          <button
            className='welcome-nav-btn'
            onClick={() => scrollTo(sectionRefs[1].ref)}
          >
            <p>Get In Touch</p>
            <FaAngleDoubleRight />
          </button>
        </div>
      </div>
    </div>
  );
}
