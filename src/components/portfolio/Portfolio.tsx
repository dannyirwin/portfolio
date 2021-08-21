import React from 'react';
import './Portfolio.css';

import ProjectsContainer from './ProjectsContainer';

interface props {
  innerRef: any;
}

export default function Portfolio({ innerRef }: props) {
  return (
    <section className='Portfolio' ref={innerRef}>
      <h2>Want to see some of my work?</h2>
      <ProjectsContainer />
    </section>
  );
}
