import React from 'react';

import WelcomeCard from '../components/WelcomeCard';

interface props {
  innerRef: any;
}

export default function Home({ innerRef }: props) {
  return (
    <section ref={innerRef}>
      <WelcomeCard />
    </section>
  );
}
