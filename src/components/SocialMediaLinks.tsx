import React, { SetStateAction } from 'react';

import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

interface props {
  setResumeIsVisible: React.Dispatch<SetStateAction<boolean>>;
}

export default function SocialMediaLinks({ setResumeIsVisible }: props) {
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
      <button
        onClick={() => {
          setResumeIsVisible(true);
        }}
      >
        <FaFileDownload />
        Resume
      </button>
    </div>
  );
}
