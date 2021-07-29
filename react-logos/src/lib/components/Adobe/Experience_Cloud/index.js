import React, { useState } from 'react';

const ExperienceCloud = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#FA0F00'
      : !color
      ? props.primaryDark || '#000000'
      : '#FA0F00',
    path_two: props.theme
      ? !color
        ? props.primaryDark || '#000000'
        : '#ffffff'
      : !color
      ? props.primaryWhite || '#ffffff'
      : '#ffffff',
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
        viewBox='0 0 128 128'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          className={props.transition}
          d='M0 20C0 8.95431 8.95431 0 20 0H108C119.046 0 128 8.95431 128 20V108C128 119.046 119.046 128 108 128H20C8.95431 128 0 119.046 0 108V20Z'
          fill={fill.path_one}
        />
        <rect
          className={props.transition}
          width='128'
          height='128'
          fill={fill.path_one}
        />
        <path
          className={props.transition}
          d='M74.1145 28.9248L104.879 99.075H83.0481L64.015 55.6753L52.4128 82.131H66.0103L73.4412 99.075L23.121 99.075L53.8856 28.9248H74.1145Z'
          fill={fill.path_two}
        />
      </svg>
    </div>
  );
};

export default ExperienceCloud;
