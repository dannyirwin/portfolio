import React from 'react';

interface props {
  innerRef: any;
}

export default function Contact({ innerRef }: props) {
  return <section ref={innerRef}>Contact</section>;
}
