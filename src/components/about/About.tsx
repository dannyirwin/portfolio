import React from 'react';

interface props {
  innerRef: any;
}

export default function About({ innerRef }: props) {
  return <section ref={innerRef}>About</section>;
}
