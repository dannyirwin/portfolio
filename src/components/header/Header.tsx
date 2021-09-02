import React, { SetStateAction } from 'react';

import config from '../../config';
import SocialMediaLinks from '../SocialMediaLinks';

import './Header.css';
import Resume from './Resume';

interface sectionRef {
  section: string;
  ref: any;
  icon: React.FC;
}

interface props {
  scrollTo: (element: any) => void;
  sectionRefs: sectionRef[];
  innerRef: any;
  visibleSection: string;
  resumeIsVisible: boolean;
  setResumeIsVisible: React.Dispatch<SetStateAction<boolean>>;
}

export default function Header({
  scrollTo,
  sectionRefs,
  visibleSection,
  innerRef,
  resumeIsVisible,
  setResumeIsVisible
}: props) {
  const showNavButtons = () => {
    return sectionRefs.map((sectionRef: sectionRef, i) => {
      return (
        <button
          className={handleBtnClassNames(sectionRef.section)}
          onClick={() => scrollTo(sectionRef.ref)}
          key={i}
        >
          {window.innerWidth < 700 ? sectionRef.icon({}) : sectionRef.section}
        </button>
      );
    });
  };

  const handleBtnClassNames = (section: string) => {
    const className = 'nav-btn';
    return section === visibleSection ? className + ' selected' : className;
  };

  const handleHeaderColor = () => {
    let color;
    sectionRefs.forEach((sectionRef, i) => {
      if (sectionRef.section === visibleSection) {
        color = i === 0 ? config.colors[1] : config.colors[i];
      }
    });
    return color;
  };

  return (
    <header
      className='Header'
      ref={innerRef}
      style={{ background: handleHeaderColor() }}
    >
      {showNavButtons()}
      <SocialMediaLinks setResumeIsVisible={setResumeIsVisible} />
      <Resume
        resumeIsVisible={resumeIsVisible}
        setResumeIsVisible={setResumeIsVisible}
      />
    </header>
  );
}
