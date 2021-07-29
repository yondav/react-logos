import React, { useState } from 'react';

const GoogleAssistant = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? props.primaryWhite || '#ffffffc9'
        : '#4285F4'
      : !color
      ? props.primaryDark || '#000000c9'
      : '#4285F4',
    path_two: props.theme
      ? !color
        ? props.primaryWhite || '#ffffffc9'
        : '#34A853'
      : !color
      ? props.primaryDark || '#000000c9'
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
        : '#FBBC05'
      : !color
      ? props.primaryDark || '#000000'
      : '#FBBC05',
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
        xmlns='http://www.w3.org/2000/svg'
        baseProfile='tiny'
        className={props.transition}
        width={props.width || 128}
        height={props.height || 128}
        viewBox='0 0 512 512'
        id='Layer_1'
        version='1.2'
      >
        <g>
          <circle
            className={props.transition}
            cx='156.268'
            cy='167.705'
            fill={fill.path_one}
            r='156.268'
          />
          <path
            d='M512,182.95c0,17.544-14.224,31.762-31.762,31.762s-31.762-14.218-31.762-31.762   c0-17.543,14.224-31.762,31.762-31.762S512,165.407,512,182.95z'
            fill={fill.path_two}
          />
          <path
            className={props.transition}
            d='M454.829,260.449c0,35.081-28.438,63.522-63.523,63.522c-35.088,0-63.524-28.441-63.524-63.522   c0-35.083,28.437-63.524,63.524-63.524C426.392,196.925,454.829,225.367,454.829,260.449z'
            fill={fill.path_three}
          />
          <path
            className={props.transition}
            d='M467.533,424.339c0,42.1-34.124,76.225-76.228,76.225c-42.104,0-76.229-34.125-76.229-76.225   c0-42.098,34.124-76.227,76.229-76.227C433.409,348.112,467.533,382.241,467.533,424.339z'
            fill={fill.path_four}
          />
        </g>
      </svg>
    </div>
  );
};

export default GoogleAssistant;
