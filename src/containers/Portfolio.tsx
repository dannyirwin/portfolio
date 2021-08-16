import React from 'react';

interface props {
  innerRef: any;
}

export default function Portfolio({ innerRef }: props) {
  return <section ref={innerRef}>Portfolio</section>;
}
