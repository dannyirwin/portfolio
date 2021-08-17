import React from 'react';

interface props {
  sectionRefs: { section: string; ref: any }[];
  scrollTo: (element: any) => void;
}

export default function WelcomeCard({ sectionRefs, scrollTo }: props) {
  return (
    <div>
      <div>
        Hello, I'm <p>Danny Irwin</p>
      </div>
      <p>I'm a full-stack web developer.</p>
      <button onClick={() => scrollTo(sectionRefs[0].ref)}>About Me</button>
      <button onClick={() => scrollTo(sectionRefs[1].ref)}>Get In Touch</button>
    </div>
  );
}
