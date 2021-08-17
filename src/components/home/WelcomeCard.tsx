import React from 'react';

interface props {
  sectionRefs: { section: string; ref: any }[];
  scrollTo: (element: any) => void;
}

export default function WelcomeCard({ sectionRefs, scrollTo }: props) {
  return (
    <div className='WelcomeCard'>
      <div className='welcome-text'>
        Hello, I'm <p className='my-name'>Danny Irwin</p>
      </div>
      <div className='welcome-text'>I'm a full-stack web developer.</div>
      <hr></hr>
      <button onClick={() => scrollTo(sectionRefs[0].ref)}>About Me</button>
      <button onClick={() => scrollTo(sectionRefs[1].ref)}>Get In Touch</button>
    </div>
  );
}
