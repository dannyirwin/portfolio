import React, { useState } from 'react';
import './Portfolio.css';

import { projects } from '../../content/projects';
import { project } from '../../utilities/interfaces';

import ProjectDetails from './ProjectDetails';
import ProjectsContainer from './ProjectsContainer';
import PortfolioHeader from './PortfolioHeader';

interface props {
  innerRef: any;
}

export default function Portfolio({ innerRef }: props) {
  const [selectedProject, setSelectedProject] = useState<project>(projects[0]);
  const [showingProjectDetails, setShowingProjectDetails] =
    useState<boolean>(false);

  const toggleView = () => {
    setShowingProjectDetails(!showingProjectDetails);
  };

  const selectProject = (project: project) => {
    setSelectedProject(project);
    setShowingProjectDetails(true);
  };

  return (
    <section className={'Portfolio'} ref={innerRef}>
      <div className='portfolio-container-outer'>
        <div className='portfolio-container'>
          <PortfolioHeader />
          <div className='portfolio-content'>
            <ProjectsContainer
              selectProject={selectProject}
              isInView={!showingProjectDetails}
            />
            <ProjectDetails
              project={selectedProject}
              toggleView={toggleView}
              isInView={showingProjectDetails}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
