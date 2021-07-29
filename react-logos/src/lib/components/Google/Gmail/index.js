import React, { useState } from 'react';

const Gmail = (props) => {
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
        : '#EA4335'
      : !color
      ? `${props.primaryDark}e9` || '#000000e9'
      : '#EA4335',
    path_four: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#FBBC04'
      : !color
      ? props.primaryDark || '#000000'
      : '#FBBC04',
    path_five: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#C5221F'
      : !color
      ? props.primaryDark || '#000000'
      : '#C5221F',
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
        viewBox='0 0 256 193'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
      >
        <g>
          <path
            className={props.transition}
            d='M58.1818182,192.049515 L58.1818182,93.1404244 L27.5066233,65.0770089 L0,49.5040608 L0,174.59497 C0,184.253152 7.82545455,192.049515 17.4545455,192.049515 L58.1818182,192.049515 Z'
            fill={fill.path_one}
          ></path>
          <path
            className={props.transition}
            d='M197.818182,192.049515 L238.545455,192.049515 C248.203636,192.049515 256,184.224061 256,174.59497 L256,49.5040608 L224.844415,67.3422767 L197.818182,93.1404244 L197.818182,192.049515 Z'
            fill={fill.path_two}
          ></path>
          <polygon
            className={props.transition}
            fill={fill.path_three}
            points='58.1818182 93.1404244 54.0077618 54.4932827 58.1818182 17.5040608 128 69.8676972 197.818182 17.5040608 202.487488 52.4960089 197.818182 93.1404244 128 145.504061'
          ></polygon>
          <path
            className={props.transition}
            d='M197.818182,17.5040608 L197.818182,93.1404244 L256,49.5040608 L256,26.2313335 C256,4.64587897 231.36,-7.65957557 214.109091,5.28587897 L197.818182,17.5040608 Z'
            fill={fill.path_four}
          ></path>
          <path
            className={props.transition}
            d='M0,49.5040608 L26.7588051,69.5731646 L58.1818182,93.1404244 L58.1818182,17.5040608 L41.8909091,5.28587897 C24.6109091,-7.65957557 0,4.64587897 0,26.2313335 L0,49.5040608 Z'
            fill={fill.path_five}
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Gmail;
