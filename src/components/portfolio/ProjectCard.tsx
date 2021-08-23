import React from 'react';
import ProjectTechs from './ProjectTechs';

import { project } from '../../utilities/interfaces';

interface props {
  project: project;
  borderColor: string;
  selectProject: (project: project) => void;
}

export default function ProjectCard({
  project,
  borderColor,
  selectProject
}: props) {
  return (
    <div className='ProjectCard' style={{ backgroundColor: borderColor }}>
      <img src={project.previewImage} alt={`${project.title} preview`}></img>
      <h1 className='project-title'>{project.title}</h1>
      <p>{project.previewText}</p>
      <hr></hr>
      <ProjectTechs techs={project.techs} />
      <div className='see-more-container'>
        <div className='see-more-btn-container'>
          <button
            className='see-more-btn'
            onClick={() => selectProject(project)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
