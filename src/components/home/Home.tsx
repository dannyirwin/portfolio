import React from 'react';

import WelcomeCard from './WelcomeCard';

import './Home.css';

interface props {
  scrollTo: (element: any) => void;
  sectionRefs: any[];
  innerRef: any;
}

export default function Home({ innerRef, sectionRefs, scrollTo }: props) {
  return (
    <section className='Home' ref={innerRef}>
      <WelcomeCard sectionRefs={sectionRefs} scrollTo={scrollTo} />
    </section>
  );
}
