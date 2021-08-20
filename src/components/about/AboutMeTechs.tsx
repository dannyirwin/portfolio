import React from 'react';

import TechCard from './TechCard';

import { content } from '../../content';

export const AboutMeTechs: React.FC = () => {
  const showTechs = () => {
    return content.techs.map((tech, i) => {
      return <TechCard tech={tech} key={i} />;
    });
  };

  return <div className='AboutMeTechs'>{showTechs()}</div>;
};
