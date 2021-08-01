import React, { useState } from 'react';

const GoogleTagManager = (props) => {
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
        : '#8AB4F8'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#8AB4F8',
    path_three: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#246FDB'
      : !color
      ? props.primaryDark || '#000000'
      : '#246FDB',
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
        viewBox='0 0 256 256'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
      >
        <g>
          <polygon
            className={props.transition}
            fill={fill.path_two}
            points='150.261818 245.516364 105.825455 202.185455 201.258182 104.730909 247.265455 149.821818'
          ></polygon>
          <path
            className={props.transition}
            d='M150.450909,53.9381818 L106.174545,8.73090909 L9.36,104.629091 C-3.12,117.109091 -3.12,137.341818 9.36,149.836364 L104.72,245.821818 L149.810909,203.64 L77.1563636,127.232727 L150.450909,53.9381818 Z'
            fill={fill.path_one}
          ></path>
          <path
            className={props.transition}
            d='M246.625455,105.370909 L150.625455,9.37090909 C138.130909,-3.12363636 117.869091,-3.12363636 105.374545,9.37090909 C92.88,21.8654545 92.88,42.1272727 105.374545,54.6218182 L201.374545,150.621818 C213.869091,163.116364 234.130909,163.116364 246.625455,150.621818 C259.12,138.127273 259.12,117.865455 246.625455,105.370909 Z'
            fill={fill.path_two}
          ></path>
          <circle
            className={props.transition}
            fill={fill.path_three}
            cx='127.265455'
            cy='224.730909'
            r='31.2727273'
          ></circle>
        </g>
      </svg>
    </div>
  );
};

export default GoogleTagManager;
