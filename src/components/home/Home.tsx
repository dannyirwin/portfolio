import React from 'react';

import WelcomeCard from './WelcomeCard';
import HomeBackground from './HomeBackground';

interface props {
  scrollTo: (element: any) => void;
  sectionRefs: any[];
  innerRef: any;
}

export default function Home({ innerRef, sectionRefs, scrollTo }: props) {
  return (
    <section ref={innerRef}>
      <HomeBackground />
      <WelcomeCard sectionRefs={sectionRefs} scrollTo={scrollTo} />
    </section>
  );
}
