import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import {
  BsInfoCircle,
  BsHouseDoor,
  BsCollection,
  BsFileRichtext,
  BsEnvelope
} from 'react-icons/bs';

import './App.css';

import Home from './home/Home';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Blog from './blog/Blog';
import Contact from './contact/Contact';
import Header from './header/Header';
import P5Background from './home/P5Background';

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
    { section: 'Home', ref: homeRef, icon: BsHouseDoor },
    { section: 'About', ref: aboutRef, icon: BsInfoCircle },
    { section: 'Portfolio', ref: portfolioRef, icon: BsCollection },
    { section: 'Blog', ref: blogRef, icon: BsFileRichtext },
    { section: 'Contact', ref: contactRef, icon: BsEnvelope }
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sectionRefs, setSectionRefs] = useState(sectionRefsInit);

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const element = ref.current;
        if (element) {
          const { offsetBottom, offsetTop } = getDimensions(element);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
        return null;
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
    <main className='App'>
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
    </main>
  );
}

export default App;
