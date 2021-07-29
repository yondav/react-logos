import React, { useState } from 'react';

const Fonts = (props) => {
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
        <rect
          className={props.transition}
          width='128'
          height='128'
          fill={fill.path_one}
        />
        <path
          className={props.transition}
          d='M69.9766 54.4197C67.2943 63.4093 64.9559 72.5567 62.2897 81.0366C61.128 85.3534 59.3454 89.4786 56.9979 93.283C55.6506 95.1989 53.8742 96.7735 51.8105 97.8812C49.7468 98.9889 47.4528 99.5991 45.1115 99.6632C41.4178 99.6632 37.7928 97.9235 37.7928 94.0841C37.8749 92.917 38.3615 91.815 39.1686 90.968C39.9758 90.121 41.053 89.5819 42.2148 89.4436C42.627 89.4277 43.0353 89.5282 43.393 89.7336C43.7508 89.9389 44.0435 90.2408 44.2376 90.6048C46.0501 93.8656 47.7898 95.7509 48.5868 95.7509C49.3838 95.7509 50.0392 94.6626 51.342 89.9494L60.9304 54.4197H54.1052C53.87 53.7573 53.8481 53.0378 54.0426 52.3623C54.237 51.6868 54.6381 51.0891 55.1895 50.6531H61.9903C63.1911 46.551 64.8424 42.5944 66.914 38.8557C68.3062 35.8346 70.5032 33.2549 73.2642 31.3995C76.0253 29.5441 79.2437 28.4845 82.567 28.3368C88.0044 28.3368 90.2539 30.9463 90.2539 34.28C90.2424 35.5787 89.7699 36.831 88.9207 37.8137C88.0715 38.7963 86.9008 39.4452 85.6175 39.6447C84.4563 39.6447 83.8778 38.7748 83.5137 37.5409C82.2999 32.9045 80.6816 31.5249 79.743 31.5249C78.8044 31.5249 77.3641 33.2564 75.7458 36.8976C73.7953 41.3414 72.2266 45.9432 71.0568 50.6531H79.3182C79.5664 51.3212 79.5871 52.0525 79.3771 52.7335C79.1672 53.4146 78.7383 54.0073 78.1571 54.4197H69.9766Z'
          fill={fill.path_two}
        />
      </svg>
    </div>
  );
};

export default Fonts;
