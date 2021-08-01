import React, { useState } from 'react';

const Material_Design = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? `${props.primaryWhite}c9` || '#ffffffc9'
        : '#4285F4'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#4285F4',
    path_two: props.theme
      ? !color
        ? `${props.primaryWhite}c9` || '#ffffffc9'
        : '#34A853'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#34A853',
    path_three: props.theme
      ? !color
        ? `${props.primaryWhite}e9` || '#ffffffe9'
        : '#FBBC05'
      : !color
      ? `${props.primaryDark}e9` || '#000000e9'
      : '#FBBC05',
  };

  const handleMouseOver = () => {
    props.hover === 'colorize' ? setColor(true) : setColor(false);
  };

  const handleMouseLeave = () => {
    props.hover === 'colorize' ? setColor(false) : setColor(true);
  };

  return (
    <div
      className='react-logos-wrapper'
      onMouseEnter={props.hover ? handleMouseOver : ''}
      onMouseLeave={props.hover ? handleMouseLeave : ''}
    >
      <svg
        className={props.transition}
        width={props.width || 128}
        height={props.height || 128}
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='12' cy='12' fill='#757575' r='12' />
        <path d='m3.6 3.6h16.8v16.8h-16.8z' fill='#bdbdbd' />
        <path d='m20.4 3.6-8.4 16.8-8.4-16.8z' fill='#fff' />
        <path d='m0 0h24v24h-24z' fill='none' />
      </svg>
    </div>
  );
};

export default Material_Design;
