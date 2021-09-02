import React, { useLayoutEffect, useState } from 'react';

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

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export default function Header({
  scrollTo,
  sectionRefs,
  visibleSection,
  innerRef
}: props) {
  useWindowSize();
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
      {window.innerWidth > 780 && <SocialMediaLinks />}
    </header>
  );
}
