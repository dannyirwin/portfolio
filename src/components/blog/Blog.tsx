import React from 'react';

import './Blog.css';
import BlogCardsContainer from './BlogCardsContainer';

interface props {
  innerRef: any;
}

export default function Blog({ innerRef }: props) {
  return (
    <section className='Blog' ref={innerRef}>
      <h2>Writing and Such</h2>
      <BlogCardsContainer />
    </section>
  );
}
