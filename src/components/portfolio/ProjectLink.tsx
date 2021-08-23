import React from 'react';

import { projectLink } from '../../utilities/interfaces';

interface props {
  projectLink: projectLink;
}

export default function ProjectLink({ projectLink }: props) {
  return (
    <a
      className='ProjectLink'
      href={projectLink.url}
      target='_blank'
      rel='noreferrer'
    >
      {projectLink.icon}
      {projectLink.label}
    </a>
  );
}
