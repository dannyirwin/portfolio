import React from 'react';
import ProjectTechs from './ProjectTechs';

import { isMobile } from 'react-device-detect';

import { project } from '../../utilities/interfaces';

import { useWindowSize } from '../../hooks/useWindowSize';

interface props {
  project: project;
  selectProject: (project: project) => void;
}

export default function ProjectCard({ project, selectProject }: props) {
  useWindowSize();
  return (
    <div
      className='ProjectCard'
      onClick={() => selectProject(project)}
      style={{ backgroundColor: project.color }}
    >
      <p className={`${isMobile ? 'visible' : 'hidden'}`}>Click to see more</p>
      <img src={project.previewImage} alt={`${project.title} preview`}></img>
      <h1 className='project-title'>{project.title}</h1>
      <p>{project.previewText}</p>
      <hr style={{ backgroundColor: 'white' }}></hr>
      <ProjectTechs techs={project.techs} />
      <div className={`see-more-container ${isMobile ? 'hidden' : 'visible'}`}>
        <div className='see-more-btn-container'>
          <button className='see-more-btn'>Details</button>
        </div>
      </div>
    </div>
  );
}
