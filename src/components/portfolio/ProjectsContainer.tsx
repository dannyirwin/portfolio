import ProjectCard from './ProjectCard';

import { project } from '../../utilities/interfaces';
import config from '../../config';
import { projects } from '../../content/projects';

interface props {
  selectProject: (project: project) => void;
  isInView: boolean;
}

export default function ProjectsContainer({ selectProject, isInView }: props) {
  const getColor = (i: number) => {
    const repeats = i - (i % config.colors.length);
    const index = i - repeats * config.colors.length;
    return config.colors[index];
  };

  const handleViewClass = () => {
    return isInView ? 'visible' : null;
  };

  const showProjects = () => {
    return projects.map((project: project, i: number) => {
      return (
        <ProjectCard
          project={project}
          borderColor={getColor(i)}
          key={i}
          selectProject={selectProject}
        />
      );
    });
  };

  return (
    <div className={`ProjectsContainer ${handleViewClass()}`}>
      {showProjects()}
    </div>
  );
}
