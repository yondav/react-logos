import React, { useState } from 'react';

const GoogleShopping = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? `${props.primaryWhite}DB` || '#ffffffDB'
        : '#EA4335'
      : !color
      ? `${props.primaryDark}DB` || '#000000DB'
      : '#EA4335',
    path_two: props.theme
      ? !color
        ? `${props.primaryWhite}B3` || '#ffffffB3'
        : '#4285F4'
      : !color
      ? `${props.primaryDark}B3` || '#000000B3'
      : '#4285F4',
    path_three: props.theme
      ? !color
        ? `${props.primaryWhite}4F` || '#ffffff4F'
        : '#FBBC05'
      : !color
      ? `${props.primaryDark}4F` || '#0000004F'
      : '#FBBC05',
    path_four: props.theme
      ? !color
        ? `${props.primaryWhite}85` || '#ffffff85'
        : '#34A853'
      : !color
      ? `${props.primaryDark}85` || '#00000085'
      : '#34A853',
    path_five: props.theme
      ? !color
        ? `${props.primaryDark}c9` || '#ffffffc9'
        : '#FFFFFF'
      : !color
      ? `${props.primaryWhite}c9` || '#000000c9'
      : '#FFFFFF',
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
        version='1.1'
        id='svg16'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 500 500'
        enable-background='new 0 0 500 500'
      >
        <g id='g1613' transform='scale(1.0001851,1.0000072)'>
          <path
            className={props.transition}
            id='path1029'
            fill-rule='evenodd'
            clip-rule='evenodd'
            fill={fill.path_one}
            d='M291.1,0
		c-12.3,0-24,4.8-32.7,13.5L148.8,123l43.2,43.2l70.3-17.6l68.2,16l43.8-43.8c-11.7-14.2-10.7-35,2.3-48c13-13,33.8-14,48-2.3
		L484,11.2C475.5,4,464.7,0,453.6,0L291.1,0z'
          />
          <path
            className={props.transition}
            id='path1211'
            fill={fill.path_two}
            d='M483.9,11.3L483.9,11.3l-59.3,59.3
		c11.7,9.6,16.1,25.5,10.9,39.7s-18.7,23.7-33.8,23.6c-10.8,0-20.8-4.6-27.5-13c0.1,0.1-0.1-0.1,0,0l-67.7,68.5l-48.2-23.3
		L204,194.9l-15.7,50.3l15.7,56.5l54.3,24.3l81.5-11.7l37.1,37.1l109.4-109.5c8.8-8.6,13.8-20.4,13.7-32.7V46.5
		C500,33,494.1,20.2,483.9,11.3L483.9,11.3z'
          />
          <path
            className={props.transition}
            id='path1433'
            fill={fill.path_three}
            d='M148.8,123L13.7,258.1C4.9,266.8,0,278.7,0,291.1c-0.1,12.3,4.9,24.1,13.7,32.7l78.9,78.9
		l89.6-89.6l-15.6-68l25.4-78.8L148.8,123z'
          />
          <path
            className={props.transition}
            id='path1584'
            fill-rule='evenodd'
            clip-rule='evenodd'
            fill={fill.path_four}
            d='M92.6,402.7l83.6,83.6c8.7,8.7,20.4,13.7,32.7,13.7
		c12.4-0.1,24.2-5,33-13.7l135-135.1l-37.1-37.1l-77.6,22.5l-80.2-23.5L92.6,402.7z'
          />
          <path
            className={props.transition}
            id='path1508'
            fill-rule='evenodd'
            clip-rule='evenodd'
            fill={fill.path_five}
            d='M358.7,225.7h-96.5v41.4h55.5
		c-5.2,26.3-26.8,41.4-55.5,41.4c-35-1.2-62.4-30.5-61.2-65.5c1.1-33.3,27.9-60,61.2-61.2c14,0,27.5,5,38.1,14.1l30.1-31.2
		c-18.6-17.2-42.9-26.7-68.2-26.8c-57.4,0-103.5,47.7-103.5,107.1s46.1,107.1,103.5,107.1c51.8,0,98.8-39,98.8-107.1
		C360.9,238.6,360.1,232.1,358.7,225.7L358.7,225.7z'
          />
        </g>
      </svg>
    </div>
  );
};

export default GoogleShopping;
