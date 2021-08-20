import React from 'react';

interface props {
  tech: tech;
}

interface tech {
  title: string;
  image: any;
}

export default function TechCard({ tech }: props) {
  return (
    <div className='TechCard'>
      <img
        className='tech-logo'
        src={tech.image}
        alt={`${tech.title} logo`}
      ></img>
      <p>{tech.title}</p>
    </div>
  );
}
