import React, { useState } from 'react';

const GoogleVoice = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#00897B'
      : !color
      ? props.primaryDark || '#000000'
      : '#00897B',
    path_two: props.theme
      ? !color
        ? `${props.primaryDark}c9` || '#000000c9'
        : '#E0E0E0'
      : !color
      ? `${props.primaryWhite}c9` || '#ffffffc9'
      : '#E0E0E0',
    path_three: props.theme
      ? !color
        ? `${props.primaryDark}e9` || '#000000e9'
        : '#F5F5F5'
      : !color
      ? `${props.primaryWhite}e9` || '#ffffffe9'
      : '#F5F5F5',
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
        id='Content'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        className={props.transition}
        width={props.width || 128}
        height={props.height || 128}
        viewBox='0 0 152 176'
        enableBackground='new 0 0 152 176'
      >
        <path
          className={props.transition}
          fill={fill.path_one}
          d='M152,76c0-41.974-34.026-76-76-76S0,34.026,0,76c0,39.8,36.3,72,76,72v28C122.2,152.6,152,114.9,152,76z'
        />
        <path
          className={props.transition}
          fill={fill.path_two}
          d='M57.966,68.045l-9.678,9.681c6.794,11.659,16.511,21.345,28.192,28.101l9.703-9.704
	C74.164,89.819,64.33,80.032,57.966,68.045z'
        />
        <path
          className={props.transition}
          fill={fill.path_three}
          d='M115.12,89.36c-5.335-0.722-10.756-1.6-16.38-2.697c-1.629-0.577-3.443-0.02-4.468,1.371L76.48,105.828
	c11.565,6.646,24.673,10.139,38.012,10.13c1.817,0.116,3.385-1.262,3.501-3.08c0.005-0.077,0.007-0.155,0.007-0.232V92.152
	C118,90.774,117.143,89.634,115.12,89.36z'
        />
        <path
          className={props.transition}
          fill={fill.path_three}
          d='M48.288,77.726l17.975-17.977c1.061-0.82,1.564-2.171,1.299-3.485c-1.397-7.349-2.229-12.007-2.919-17.38
	c0.058-1.546-1.148-2.846-2.693-2.904c-0.151-0.006-0.302,0.001-0.452,0.02H41.351c-1.833,0.031-3.316,1.502-3.363,3.335
	c0.076,9.907,1.998,19.713,5.667,28.916C44.985,71.51,46.533,74.676,48.288,77.726z'
        />
      </svg>
    </div>
  );
};

export default GoogleVoice;
