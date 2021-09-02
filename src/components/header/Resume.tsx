import React, { SetStateAction } from 'react';

interface props {
  resumeIsVisible: boolean;
  setResumeIsVisible: React.Dispatch<SetStateAction<boolean>>;
}

export default function Resume({ resumeIsVisible, setResumeIsVisible }: props) {
  return (
    <div
      className={`background-disable-container ${
        resumeIsVisible ? 'visible' : ''
      }`}
      onClick={() => setResumeIsVisible(false)}
    >
      <img src='../../images/resume.pdf' alt='Resume'></img>
    </div>
  );
}
