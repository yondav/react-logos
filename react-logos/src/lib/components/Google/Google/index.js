import React, { useState } from 'react';

const Google = (props) => {
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
    path_four: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#EB4335'
      : !color
      ? props.primaryDark || '#000000'
      : '#EB4335',
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
        viewBox='0 0 256 262'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
      >
        <g>
          <path
            className={props.transition}
            d='M255.878,133.451 C255.878,122.717 255.007,114.884 253.122,106.761 L130.55,106.761 L130.55,155.209 L202.497,155.209 C201.047,167.249 193.214,185.381 175.807,197.565 L175.563,199.187 L214.318,229.21 L217.003,229.478 C241.662,206.704 255.878,173.196 255.878,133.451'
            fill={fill.path_one}
          ></path>
          <path
            className={props.transition}
            d='M130.55,261.1 C165.798,261.1 195.389,249.495 217.003,229.478 L175.807,197.565 C164.783,205.253 149.987,210.62 130.55,210.62 C96.027,210.62 66.726,187.847 56.281,156.37 L54.75,156.5 L14.452,187.687 L13.925,189.152 C35.393,231.798 79.49,261.1 130.55,261.1'
            fill={fill.path_two}
          ></path>
          <path
            className={props.transition}
            d='M56.281,156.37 C53.525,148.247 51.93,139.543 51.93,130.55 C51.93,121.556 53.525,112.853 56.136,104.73 L56.063,103 L15.26,71.312 L13.925,71.947 C5.077,89.644 0,109.517 0,130.55 C0,151.583 5.077,171.455 13.925,189.152 L56.281,156.37'
            fill={fill.path_three}
          ></path>
          <path
            className={props.transition}
            d='M130.55,50.479 C155.064,50.479 171.6,61.068 181.029,69.917 L217.873,33.943 C195.245,12.91 165.798,0 130.55,0 C79.49,0 35.393,29.301 13.925,71.947 L56.136,104.73 C66.726,73.253 96.027,50.479 130.55,50.479'
            fill={fill.path_four}
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Google;
