import React, { useState } from 'react';

const Lightroom = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#001E36'
      : !color
      ? props.primaryDark || '#000000'
      : '#001E36',
    path_two: props.theme
      ? !color
        ? props.primaryDark || '#000000'
        : '#31A8FF'
      : !color
      ? props.primaryWhite || '#ffffff'
      : '#31A8FF',
  };

  const handleMouseOver = () => {
    if (props.hover === 'colorize') {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const handleMouseLeave = () => {
    if (props.hover === 'colorize') {
      setColor(false);
    } else {
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
          d='M66.9565 91.7631H33.6352C33.0715 91.7631 32.7899 91.453 32.7903 90.8328L32.8298 37.7631C32.8149 37.6597 32.8243 37.5542 32.8573 37.4551C32.8903 37.356 32.9459 37.2659 33.0198 37.192C33.0937 37.1181 33.1838 37.0625 33.2829 37.0295C33.3821 36.9965 33.4875 36.9871 33.5909 37.002H43.3938C43.4741 36.9907 43.556 36.9982 43.633 37.024C43.7099 37.0497 43.7799 37.093 43.8372 37.1504C43.8946 37.2078 43.9378 37.2778 43.9635 37.3547C43.9892 37.4317 43.9967 37.5136 43.9853 37.594L44.1224 80.5197H68.6253C69.1331 80.5197 69.3303 80.7734 69.2168 81.2808L67.8013 91.002C67.798 91.1266 67.7658 91.2487 67.7074 91.3588C67.6489 91.4689 67.5657 91.564 67.4642 91.6365C67.3072 91.7177 67.1333 91.761 66.9565 91.7631Z'
          fill={fill.path_two}
        />
        <path
          className={props.transition}
          d='M76.3275 49.7386H85.5463C85.7965 49.7408 86.0392 49.8245 86.2376 49.9771C86.436 50.1296 86.5792 50.3427 86.6457 50.584C86.8464 50.9547 86.9891 51.3541 87.0687 51.7681C87.1862 52.3122 87.2708 52.8629 87.322 53.4171C87.3778 54.0092 87.4061 54.6435 87.4068 55.32C88.9877 53.4793 90.8942 51.9455 93.0307 50.7955C95.2823 49.4991 97.8447 48.8412 100.442 48.8926C100.546 48.8779 100.651 48.8875 100.75 48.9205C100.849 48.9536 100.939 49.0092 101.013 49.083C101.087 49.1569 101.142 49.2469 101.176 49.3459C101.209 49.445 101.218 49.5503 101.203 49.6537V59.8869C101.203 60.2819 100.92 60.4789 100.357 60.4789C98.6387 60.3572 96.9114 60.4854 95.2294 60.8594C93.7165 61.1602 92.2416 61.6281 90.8321 62.2545C89.5949 62.7192 88.4386 63.3757 87.4055 64.1998V90.9884C87.4055 91.4957 87.1797 91.7494 86.728 91.7496H77.0886C76.9737 91.766 76.8565 91.7555 76.7464 91.7188C76.6362 91.6821 76.5362 91.6202 76.4541 91.5381C76.372 91.4561 76.3101 91.356 76.2734 91.2458C76.2367 91.1357 76.2262 91.0185 76.2427 90.9036V61.8323C76.2427 60.5924 76.2285 59.2813 76.2002 57.8993C76.1713 56.5187 76.1292 55.1515 76.0741 53.7977C76.0369 52.6359 75.9239 51.4777 75.736 50.3306C75.7149 50.2488 75.7154 50.1629 75.7377 50.0814C75.7599 49.9999 75.803 49.9256 75.8627 49.8658C75.9224 49.806 75.9967 49.7628 76.0782 49.7405C76.1597 49.7182 76.2457 49.7175 76.3275 49.7386Z'
          fill={fill.path_two}
        />
      </svg>
    </div>
  );
};

export default Lightroom;