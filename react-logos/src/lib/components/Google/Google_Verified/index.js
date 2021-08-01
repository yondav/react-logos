import React, { useState } from 'react';

const Google_Verified = (props) => {
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
        enable-background='new 0 0 2039.9 2500'
        viewBox='0 0 2039.9 2500'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          className={props.transition}
          clip-rule='evenodd'
          d='m1991.4 503.9-942 1934.3-1001.9-1284.1z'
          fill='#fff'
          fill-rule='evenodd'
        />
        <path
          className={props.transition}
          d='m1019.9 0-1019.9 453.3v680c0 632.3 437.4 1223.9 1019.9 1366.7 588.2-143.9 1019.9-734.4 1019.9-1366.7v-680zm-226.6 1822.3-453.3-453.3 160.9-160.9 294.6 293.5 748-755.9 160.9 162.1z'
          fill='#4285f4'
        />
      </svg>
    </div>
  );
};

export default Google_Verified;
