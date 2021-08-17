import React from 'react';

interface sectionRef {
  section: string;
  ref: any;
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
          className={handleClassNames(sectionRef.section)}
          onClick={() => scrollTo(sectionRef.ref)}
          key={i}
        >
          {sectionRef.section}
        </button>
      );
    });
  };

  const handleClassNames = (section: string) => {
    const className = 'nav-btn';
    return section === visibleSection ? className + ' selected' : className;
  };

  return (
    <header className='Header' ref={innerRef}>
      {showNavButtons()}
    </header>
  );
}
