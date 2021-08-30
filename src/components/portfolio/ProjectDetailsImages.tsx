import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { projects } from '../../content/projects';

interface props {
  image: any;
  showControls: boolean;
  handleNextImage: (direction: number) => void;
  arrowColor: string | undefined;
}

export default function ProjectDetailsImages({
  image,
  handleNextImage,
  showControls,
  arrowColor
}: props) {
  return (
    <div className='ProjectDetailsImages'>
      {showControls && (
        <div className='slideshow-controls'>
          <button onClick={() => handleNextImage(1)}>
            <FaArrowLeft style={{ fill: arrowColor }} />
          </button>
          <button onClick={() => handleNextImage(-1)}>
            <FaArrowRight style={{ fill: arrowColor }} />
          </button>
        </div>
      )}
      <img src={image} alt='Preview of the project'></img>
    </div>
  );
}
