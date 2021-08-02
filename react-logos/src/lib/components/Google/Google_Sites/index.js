import React, { useState } from 'react';

const GoogleSites = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? `${props.primaryWhite}c9` || '#ffffffc9'
        : '#3f51b5'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#3f51b5',
    path_two: props.theme
      ? !color
        ? `${props.primaryWhite}c9` || '#ffffffc9'
        : '#9fa8da'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#9fa8da',
    path_three: props.theme
      ? !color
        ? `${props.primaryDark}c9` || '#ffffffc9'
        : '#f1f1f1'
      : !color
      ? `${props.primaryWhite}c9` || '#000000c9'
      : '#f1f1f1',
    path_four: props.theme
      ? !color
        ? `${props.primaryDark}c9` || '#ffffffc9'
        : '#4285f4'
      : !color
      ? `${props.primaryWhite}c9` || '#000000c9'
      : '#4285f4',
    path_five: props.theme
      ? !color
        ? `${props.primaryDark}c9` || '#ffffffc9'
        : '#4285f4'
      : !color
      ? `${props.primaryWhite}c9` || '#000000c9'
      : '#4285f4',
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
        preserveAspectRatio='none'
        version='1.1'
        viewBox='0 0 240 240'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g transform='scale(10)'>
          <path
            className={props.transition}
            d='m14 1h-8.5c-0.8 0-1.5 0.7-1.5 1.5v19c0 0.8 0.7 1.5 1.5 1.5h13c0.8 0 1.5-0.7 1.5-1.5v-14.5l-3.5-2.5z'
            clip-path='url(#h)'
            fill={fill.path_one}
          />
          <path
            className={props.transition}
            d='m14 1v4.5c0 0.8 0.7 1.5 1.5 1.5h4.5z'
            fill={fill.path_two}
          />
          <polyline
            className={props.transition}
            points='12.5 15.5 8 15.5 8 19 12.5 19 12.5 15.5'
            clip-path='url(#o)'
            fill={fill.path_three}
          />
          <polyline
            className={props.transition}
            points='16 15.5 13.5 15.5 13.5 19 16 19 16 15.5'
            clip-path='url(#m)'
            fill={fill.path_three}
          />
          <polyline
            className={props.transition}
            points='16 12 8 12 8 14.5 16 14.5 16 12'
            clip-path='url(#k)'
            fill={fill.path_three}
          />
          <radialGradient
            id='i'
            cx='4425.1'
            cy='-6825.8'
            r='206.4'
            gradientTransform='matrix(.125 0 0 -.125 -548.62 -851.62)'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#fff' stop-opacity='.1' offset='0' />
            <stop stop-color='#fff' stop-opacity='0' offset='1' />
          </radialGradient>
          <path
            className={props.transition}
            d='m14 1h-8.5c-0.8 0-1.5 0.7-1.5 1.5v19c0 0.8 0.7 1.5 1.5 1.5h13c0.8 0 1.5-0.7 1.5-1.5v-14.5z'
            fill='url(#i)'
          />
        </g>
      </svg>
    </div>
  );
};

export default GoogleSites;
