import React, { useState } from 'react';

const GoogleChat = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? `${props.primaryWhite}e9` || '#ffffffe9'
        : '#00AC47'
      : !color
      ? `${props.primaryDark}e9` || '#000000e9'
      : '#00AC47',
    path_two: props.theme
      ? !color
        ? `${props.primaryWhite}e9` || '#ffffffe9'
        : '#5BB974'
      : !color
      ? `${props.primaryDark}e9` || '#000000e9'
      : '#5BB974',
    path_three: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#00832D'
      : !color
      ? props.primaryDark || '#000000'
      : '#00832D',
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
        version='1.1'
        id='Livello_1'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        className={props.transition}
        width={props.width || 128}
        height={props.height || 128}
        viewBox='0 0 479.4 500'
        enableBackground='new 0 0 479.4 500'
      >
        <g>
          <path
            className={props.transition}
            fill={fill.path_one}
            d='M108.8,269.7V107.2h-71C16.9,107.2,0,124.2,0,145.1V481c0,16.9,20.4,25.3,32.3,13.4l78.1-78.1h222.4
		c20.9,0,37.8-16.9,37.8-37.8v-71H146.7C125.8,307.5,108.8,290.6,108.8,269.7z'
          />
          <path
            className={props.transition}
            fill={fill.path_two}
            d='M441.6,0H146.7c-20.9,0-37.8,16.9-37.8,37.8v69.4h223.9c20.9,0,37.8,16.9,37.8,37.8v162.4h71
		c20.9,0,37.8-16.9,37.8-37.8V37.8C479.4,16.9,462.5,0,441.6,0z'
          />
          <path
            className={props.transition}
            fill={fill.path_three}
            d='M332.8,107.2H108.8v162.4c0,20.9,16.9,37.8,37.8,37.8h223.9V145.1C370.6,124.2,353.7,107.2,332.8,107.2z'
          />
        </g>
      </svg>
    </div>
  );
};

export default GoogleChat;
