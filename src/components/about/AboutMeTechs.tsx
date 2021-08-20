import React from 'react';

import TechCard from './TechCard';

import { techs } from '../../content/techs';

export default function AboutMeTechs() {
  const showTechs = () => {
    return techs.map((tech, i) => {
      return <TechCard tech={tech} key={i} />;
    });
  };

  return <div className='AboutMeTechs'>{showTechs()}</div>;
}
