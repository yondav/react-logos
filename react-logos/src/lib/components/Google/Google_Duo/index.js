import React, { useState } from 'react';

const GoogleDuo = (props) => {
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
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 192 192'
      >
        <rect fill='none' height='192' width='192' />
        <path
          className={props.transition}
          d='M184 101c-2.41 46.45-40.96 83-88 83-48.59 0-88-39.4-88-88S47.41 8 96 8h74c7.67 0 14 6.33 14 14v79z'
          fill={fill.path_one}
        />
        <path
          className={props.transition}
          d='M151 69l-19 19v12.01L151 119c1.77 1.88 5 .58 5-2V71c0-2.52-3.19-3.78-5-2z'
          fill={fill.path_two}
        />
        <path
          className={props.transition}
          d='M117 60H67c-8.39.01-15.01 6.74-15 15v38c.01 8.26 6.61 15.01 15 15h50c8.39-.01 15.01-6.74 15-15V75c-.01-8.26-6.61-15.01-15-15z'
          fill={fill.path_two}
        />
      </svg>
    </div>
  );
};

export default GoogleDuo;
