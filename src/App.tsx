import React, { useRef, useEffect, useState } from 'react';

import './App.css';

import Home from './containers/Home';
import About from './containers/About';
import Portfolio from './containers/Portfolio';
import Blog from './containers/Blog';
import Contact from './containers/Contact';
import Header from './containers/Header';

const getDimensions = (element: any) => {
  const { height } = element.getBoundingClientRect();
  const offsetTop = element.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom
  };
};

const scrollTo = (element: any) => {
  element.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

function App() {
  const [visibleSection, setVisibleSection] = useState('Home');

  const headerRef = useRef<HTMLHeadElement>(null);
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const blogRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefsInit = [
    { section: 'Home', ref: homeRef },
    { section: 'About', ref: aboutRef },
    { section: 'Portfolio', ref: portfolioRef },
    { section: 'Blog', ref: blogRef },
    { section: 'Contact', ref: contactRef }
  ];

  const [sectionRefs, setSectionRefs] = useState(sectionRefsInit);

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection('');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSection, sectionRefs]);

  return (
    <div className='App'>
      <div className='content'>
        <Home
          scrollTo={scrollTo}
          sectionRefs={[sectionRefs[1], sectionRefs[4]]}
          innerRef={homeRef}
        />
        <Header
          scrollTo={scrollTo}
          sectionRefs={sectionRefs}
          visibleSection={visibleSection}
          innerRef={headerRef}
        />
        <About innerRef={aboutRef} />
        <Portfolio innerRef={portfolioRef} />
        <Blog innerRef={blogRef} />
        <Contact innerRef={contactRef} />
      </div>
    </div>
  );
}

export default App;
