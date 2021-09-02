import React from 'react';

import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SocialMediaLinks() {
  return (
    <div className='SocialMediaLinks'>
      <a href='https://github.com/dannyirwin' target='_blank' rel='noreferrer'>
        <FaGithub />
      </a>
      <a
        href='https://www.linkedin.com/in/dannyirwin/'
        target='_blank'
        rel='noreferrer'
      >
        <FaLinkedin />
      </a>
      {/* <button>
        <FaFileDownload />
        Resume
      </button> */}
    </div>
  );
}
