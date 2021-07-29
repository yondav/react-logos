import React, { useState } from 'react';

const GoogleAds = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? `${props.primaryWhite}c9` || '#ffffffc9'
        : '#FBBC04'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#FBBC04',
    path_two: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#4285F4'
      : !color
      ? props.primaryDark || '#000000'
      : '#4285F4',
    path_three: props.theme
      ? !color
        ? `${props.primaryWhite}e9` || '#ffffffe9'
        : '#34A853'
      : !color
      ? `${props.primaryDark}e9` || '#000000e9'
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
        viewBox='0 0 256 230'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
      >
        <g>
          <path
            d='M5.888,166.405103 L90.88,20.9 C101.676138,27.2558621 156.115862,57.3844138 164.908138,63.1135172 L79.9161379,208.627448 C70.6206897,220.906621 -5.888,185.040138 5.888,166.396276 L5.888,166.405103 Z'
            fill={fill.path_one}
          ></path>
          <path
            d='M250.084224,166.401789 L165.092224,20.9055131 C153.210293,1.13172 127.619121,-6.05393517 106.600638,5.62496138 C85.582155,17.3038579 79.182155,42.4624786 91.0640861,63.1190303 L176.056086,208.632961 C187.938017,228.397927 213.52919,235.583582 234.547672,223.904686 C254.648086,212.225789 261.966155,186.175582 250.084224,166.419444 L250.084224,166.401789 Z'
            fill={fill.path_two}
          ></path>
          <ellipse
            fill={fill.path_three}
            cx='42.6637241'
            cy='187.924414'
            rx='42.6637241'
            ry='41.6044138'
          ></ellipse>
        </g>
      </svg>
    </div>
  );
};

export default GoogleAds;
