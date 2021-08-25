import React from 'react';

import config from '../../config';
import SocialMediaLinks from '../SocialMediaLinks';

import './Header.css';

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
}

export default function Header({
  scrollTo,
  sectionRefs,
  visibleSection,
  innerRef
}: props) {
  const showNavButtons = () => {
    return sectionRefs.map((sectionRef: sectionRef, i) => {
      return (
        <button
          className={handleBtnClassNames(sectionRef.section)}
          onClick={() => scrollTo(sectionRef.ref)}
          key={i}
        >
          {window.innerWidth < 500 ? sectionRef.icon({}) : sectionRef.section}
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
        color = config.colors[i];
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
      <SocialMediaLinks />
    </header>
  );
}
