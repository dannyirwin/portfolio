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
    const nOfColors = config.colors.length;
    const repeats = (i - (i % nOfColors)) / nOfColors;
    const index = i - repeats * nOfColors;
    return config.colors[index];
  };

  const handleViewClass = () => {
    return isInView ? 'visible' : null;
  };

  const showProjects = () => {
    return projects.map((project: project, i: number) => {
      project.color = getColor(i);
      return (
        <ProjectCard project={project} key={i} selectProject={selectProject} />
      );
    });
  };

  return (
    <div className={`ProjectsContainer ${handleViewClass()}`}>
      {showProjects()}
    </div>
  );
}
