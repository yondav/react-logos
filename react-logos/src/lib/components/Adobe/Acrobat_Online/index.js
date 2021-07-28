import React, { useState } from 'react';

const AcrobatOnline = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#000B1D'
      : !color
      ? props.primaryDark || '#000000'
      : '#000B1D',
    path_two: props.theme
      ? !color
        ? props.primaryDark || '#000000'
        : '#ffffff'
      : !color
      ? props.primaryWhite || '#ffffff'
      : '#ffffff',
  };

  const handleMouseOver = () => {
    if (props.hover === 'colorize') {
      setColor(true);
    }
    if ('decolorize') {
      setColor(false);
    }
  };

  const handleMouseLeave = () => {
    if (props.hover === 'colorize') {
      setColor(false);
    }
    if ('decolorize') {
      setColor(true);
    }
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
        <rect
          className={props.transition}
          width='128'
          height='128'
          fill={fill.path_one}
        />
        <path
          className={props.transition}
          d='M102.071 73.8285C96.1286 67.6571 79.9 70.1714 76.0143 70.6285C70.3 65.1428 66.4143 58.5142 65.0429 56.2285C67.1 50.0571 68.4715 43.8857 68.7 37.2571C68.7 31.5428 66.4143 25.3714 60.0143 25.3714C57.7286 25.3714 55.6715 26.7428 54.5286 28.5714C51.7857 33.3714 52.9286 42.9714 57.2715 52.7999C54.7572 59.8857 52.4715 66.7428 46.0715 78.8571C39.4429 81.5999 25.5 87.9999 24.3572 94.8571C23.9 96.9142 24.5857 98.9714 26.1857 100.571C27.7857 101.943 29.8429 102.629 31.9 102.629C40.3572 102.629 48.5857 90.9714 54.3 81.1428C59.1 79.5428 66.6429 77.2571 74.1857 75.8857C83.1 83.6571 90.8715 84.7999 94.9857 84.7999C100.471 84.7999 102.529 82.5142 103.214 80.4571C104.357 78.1714 103.671 75.6571 102.071 73.8285ZM96.3572 77.7142C96.1286 79.3142 94.0715 80.9142 90.4143 79.9999C86.0715 78.8571 82.1857 76.7999 78.7572 74.0571C81.7286 73.5999 88.3572 72.9142 93.1572 73.8285C94.9857 74.2857 96.8143 75.4285 96.3572 77.7142ZM58.1857 30.6285C58.6429 29.9428 59.3286 29.4857 60.0143 29.4857C62.0715 29.4857 62.5286 31.9999 62.5286 34.0571C62.3 38.8571 61.3857 43.6571 59.7857 48.2285C56.3572 39.0857 57.0429 32.6857 58.1857 30.6285ZM57.7286 74.9714C59.5572 71.3142 62.0715 64.9142 62.9857 62.1714C65.0429 65.5999 68.4715 69.7142 70.3 71.5428C70.3 71.7714 63.2143 73.1428 57.7286 74.9714ZM44.2429 84.1142C38.9857 92.7999 33.5 98.2857 30.5286 98.2857C30.0715 98.2857 29.6143 98.0571 29.1572 97.8285C28.4715 97.3714 28.2429 96.6857 28.4715 95.7714C29.1572 92.5714 35.1 88.2285 44.2429 84.1142Z'
          fill={fill.path_two}
        />
      </svg>
    </div>
  );
};

export default AcrobatOnline;
