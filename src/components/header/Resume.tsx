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
      <iframe
        className={`Resume ${resumeIsVisible ? 'visible' : ''}`}
        src='https://drive.google.com/file/d/1jVZKIxGHOWLbw1WwE7ys1MEtvvf0Be_U/preview'
        allow='autoplay'
        title='resume'
      ></iframe>
    </div>
  );
}
