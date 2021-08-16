import React from 'react';

interface sectionRef {
  section: string;
  ref: any;
}

interface props {
  scrollTo: (element: any) => void;
  sectionRefs: sectionRef[];
  innerRef: any;
}

export default function Header({ scrollTo, sectionRefs, innerRef }: props) {
  const showNavButtons = () => {
    return sectionRefs.map((sectionRef: sectionRef, i) => {
      return (
        <button onClick={() => scrollTo(sectionRef.ref)} key={i}>
          {sectionRef.section}
        </button>
      );
    });
  };

  return (
    <header className='Header' ref={innerRef}>
      {showNavButtons()}
    </header>
  );
}
