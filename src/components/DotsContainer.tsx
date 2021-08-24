import React from 'react';

interface props {
  numberOfDots?: number;
  color: string;
}

export default function DotsContainer({ numberOfDots = 1, color }: props) {
  const showDots = () => {
    const dots = [];
    let opacity = 1;
    const opacityInc = 1 / (numberOfDots + 1);
    for (let i = 0; i < numberOfDots; i++) {
      dots.unshift(
        <div className='Dot' style={{ background: color, opacity: opacity }}>
          {' '}
        </div>
      );
      opacity -= opacityInc;
    }
    return dots;
  };

  return <div className='DotsContainer'>{showDots()}</div>;
}
