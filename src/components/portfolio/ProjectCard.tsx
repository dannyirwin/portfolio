import React from 'react';
import ProjectTechs from './ProjectTechs';

import { project } from '../../utilities/interfaces';

interface props {
  project: project;
  selectProject: (project: project) => void;
}

export default function ProjectCard({ project, selectProject }: props) {
  return (
    <div
      className='ProjectCard'
      onClick={() => selectProject(project)}
      style={{ backgroundColor: project.color }}
    >
      <img src={project.previewImage} alt={`${project.title} preview`}></img>
      <h1 className='project-title'>{project.title}</h1>
      <p>{project.previewText}</p>
      <hr style={{ backgroundColor: 'white' }}></hr>
      <ProjectTechs techs={project.techs} />
      <div className='see-more-container'>
        <div className='see-more-btn-container'>
          <button className='see-more-btn'>Details</button>
        </div>
      </div>
    </div>
  );
}
