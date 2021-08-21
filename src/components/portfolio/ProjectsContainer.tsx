import React from 'react';
import ProjectCard from './ProjectCard';

import config from '../../config';
import { projects } from '../../content/projects';

export default function ProjectsContainer() {
  const getColor = (i: number) => {
    const repeats = i - (i % config.colors.length);
    const index = i - repeats * config.colors.length;
    return config.colors[index];
  };

  const showProjects = () => {
    return projects.map((project: any, i: number) => {
      return (
        <ProjectCard project={project} borderColor={getColor(i)} key={i} />
      );
    });
  };

  return <div className='ProjectsContainer'>{showProjects()}</div>;
}
