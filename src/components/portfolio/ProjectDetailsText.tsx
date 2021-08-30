import React from 'react';

import { project } from '../../utilities/interfaces';
import ProjectLink from './ProjectLink';
import ProjectTechs from './ProjectTechs';

interface props {
  project: project;
}

export default function ProjectDetailsText({ project }: props) {
  const showLinks = () => {
    return project.links.map((link, i) => {
      return <ProjectLink projectLink={link} key={i} />;
    });
  };

  return (
    <div className='ProjectDetailsText' style={{ borderColor: project.color }}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <hr style={{ backgroundColor: project.color }}></hr>
      <div className='project-links-container'>{showLinks()}</div>
      <ProjectTechs techs={project.techs} />
    </div>
  );
}
