import React from 'react';

import WelcomeCard from '../components/WelcomeCard';

interface props {
  scrollTo: (element: any) => void;
  sectionRefs: {}[];
  innerRef: any;
}

export default function Home({ innerRef, sectionRefs, scrollTo }: props) {
  return (
    <section ref={innerRef}>
      <WelcomeCard sectionRefs={sectionRefs} scrollTo={scrollTo} />
    </section>
  );
}
