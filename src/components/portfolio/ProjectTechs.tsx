import React from 'react';

interface props {
  techs: string;
}

export default function ProjectTechs({ techs }: props) {
  const formatTechs = () => {
    return techs.replace(/\s+/g, ' | ');
  };
  return <p className='ProjectTechs'>{formatTechs()}</p>;
}
