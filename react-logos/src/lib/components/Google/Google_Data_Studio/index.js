import React, { useState } from 'react';

const GoogleDataStudio = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#1A73E8'
      : !color
      ? props.primaryDark || '#000000'
      : '#1A73E8',
    path_two: props.theme
      ? !color
        ? `${props.primaryWhite}c9` || '#ffffffc9'
        : '#669DF6'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#669DF6',
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
        viewBox='0 0 256 239'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
      >
        <g>
          <path
            className={props.transition}
            d='M224.021661,173.15874 L131.06335,173.15874 C108.582501,173.15874 95.9932253,188.895334 95.9932253,205.643566 C95.9932253,221.09915 106.671629,238.128393 131.06335,238.128393 L224.021661,238.128393 L224.021661,173.15874 Z'
            fill={fill.path_two}
          ></path>
          <ellipse
            className={props.transition}
            fill={fill.path_one}
            cx='224.021661'
            cy='205.587364'
            rx='31.9790077'
            ry='32.4848268'
          ></ellipse>
          <path
            className={props.transition}
            d='M128.028435,86.5512687 L35.0701245,86.5512687 C12.5892755,86.5512687 0,102.287863 0,119.036096 C0,134.491679 10.6784033,151.520922 35.0701245,151.520922 L128.028435,151.520922 L128.028435,86.5512687 Z'
            fill={fill.path_two}
          ></path>
          <ellipse
            className={props.transition}
            fill={fill.path_one}
            cx='128.028435'
            cy='119.036096'
            rx='31.9790077'
            ry='32.4848268'
          ></ellipse>
          <path
            className={props.transition}
            d='M224.021661,7.10542736e-15 L131.06335,7.10542736e-15 C108.582501,7.10542736e-15 95.9932253,15.7365943 95.9932253,32.4848268 C95.9932253,47.9404105 106.671629,64.9696537 131.06335,64.9696537 L224.021661,64.9696537 L224.021661,7.10542736e-15 Z'
            fill={fill.path_two}
          ></path>
          <ellipse
            className={props.transition}
            fill={fill.path_one}
            cx='224.021661'
            cy='32.4848268'
            rx='31.9790077'
            ry='32.4848268'
          ></ellipse>
        </g>
      </svg>
    </div>
  );
};

export default GoogleDataStudio;
