import React from 'react';

import { FaInfoCircle } from 'react-icons/fa';

export default function PortfolioHeader() {
  return (
    <div className='PortfolioHeader'>
      <h2 className='portfolio-header'>Want to see some of my work?</h2>
      <hr></hr>
      <div className='this-project-info-container'>
        <FaInfoCircle />
        <p>
          This site was made using React, TypeScript, and P5.js. Check out the
          repo{' '}
          <a
            href='http://github.com/dannyiriwn/portfolio'
            target='_blank'
            rel='noreferrer'
          >
            here
          </a>
        </p>
      </div>
    </div>
  );
}
