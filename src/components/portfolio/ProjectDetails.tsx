import React, { useState } from 'react';

import { project } from '../../utilities/interfaces';
import ProjectDetailsImages from './ProjectDetailsImages';
import ProjectDetailsText from './ProjectDetailsText';
import { FaAngleDoubleLeft } from 'react-icons/fa';

interface props {
  project: project;
  isInView: boolean;
  toggleView: () => void;
}

export default function ProjectDetails({
  project,
  toggleView,
  isInView
}: props) {
  const [imageIndex, setImageIndex] = useState<number>(0);

  const handleNextImage = (direction: number) => {
    const images = project.images;
    const sum = imageIndex + direction;
    const newIndex =
      sum > images.length - 1 ? 0 : sum < 0 ? images.length - 1 : sum;
    setImageIndex(newIndex);
  };

  const handleVisibleClass = () => {
    return isInView ? 'visible' : null;
  };

  const handleGoBack = () => {
    setImageIndex(0);
    toggleView();
  };

  return (
    <div className={`ProjectDetails ${handleVisibleClass()}`}>
      <button onClick={handleGoBack}>
        <FaAngleDoubleLeft />
        <p>Back to Project Gallery</p>
        <FaAngleDoubleLeft />
      </button>
      <ProjectDetailsImages
        image={project.images[imageIndex]}
        handleNextImage={handleNextImage}
      />
      <ProjectDetailsText project={project} />
    </div>
  );
}
