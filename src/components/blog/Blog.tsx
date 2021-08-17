import React from 'react';

interface props {
  innerRef: any;
}

export default function Blog({ innerRef }: props) {
  return <section ref={innerRef}>Blog</section>;
}
