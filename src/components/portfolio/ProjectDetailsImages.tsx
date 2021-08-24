import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface props {
  image: any;
  showControls: boolean;
  handleNextImage: (direction: number) => void;
}

export default function ProjectDetailsImages({
  image,
  handleNextImage,
  showControls
}: props) {
  return (
    <div className='ProjectDetailsImages'>
      {showControls && (
        <div className='slideshow-controls'>
          <button onClick={() => handleNextImage(1)}>
            <FaArrowLeft />
          </button>
          <button onClick={() => handleNextImage(-1)}>
            <FaArrowRight />
          </button>
        </div>
      )}
      <img src={image} alt='Preview of the project'></img>
    </div>
  );
}
