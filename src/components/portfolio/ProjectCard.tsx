import React from 'react';
import { techs } from '../../content/techs';

interface project {
  title: string;
  previewImage: any;
  previewText: string;
  techs: string;
  images: any[];
  description: string;
  links: link[];
}

interface link {
  url: string;
  label: string;
}

interface props {
  project: project;
  borderColor: string;
}

export default function ProjectCard({ project, borderColor }: props) {
  const formatTechs = () => {
    return project.techs.replace(/\s+/g, ' | ');
  };

  return (
    <div className='ProjectCard' style={{ borderColor: borderColor }}>
      <img src={project.previewImage} alt={`${project.title} preview`}></img>
      <h1 className='project-title'>{project.title}</h1>
      <p>{project.previewText}</p>
      <hr></hr>
      <p className='project-techs'>{formatTechs()}</p>
      <div className='see-more-container'>
        <div className='see-more-btn-container'>
          <button className='see-more-btn'>Details</button>
        </div>
      </div>
    </div>
  );
}
