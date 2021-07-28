import React, { useState } from 'react';

const Audition = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#00005B'
      : !color
      ? props.primaryDark || '#000000'
      : '#00005B',
    path_two: props.theme
      ? !color
        ? props.primaryDark || '#000000'
        : '#9999FF'
      : !color
      ? props.primaryWhite || '#ffffff'
      : '#9999FF',
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
          fillRule='evenodd'
          clipRule='evenodd'
          d='M67.0351 90.1092L49.8313 38.6571C49.7712 38.4062 49.6352 38.1628 49.3929 37.9897C49.1481 37.8148 48.8679 37.7643 48.6217 37.7643H37.4639C37.2004 37.7643 36.8787 37.8306 36.6277 38.0816C36.3801 38.3293 36.3122 38.6456 36.3104 38.9071C36.2576 40.7902 36.048 42.1622 35.7144 43.0678L35.7101 43.0793L20.3243 90.0333L20.3194 90.0496C20.2213 90.3767 20.1586 90.8369 20.4329 91.2288C20.7163 91.6336 21.1804 91.7161 21.5242 91.7161H29.4941C29.8255 91.7161 30.181 91.643 30.4739 91.4087C30.7574 91.1819 30.8995 90.8707 30.9516 90.5538L35.171 77.0516H51.16L55.6462 90.8196L55.6687 90.8646C55.797 91.1212 55.9853 91.345 56.2441 91.5003C56.5012 91.6546 56.786 91.7161 57.0698 91.7161H65.996C66.3072 91.7161 66.762 91.6265 67.0048 91.1894C67.2159 90.8095 67.1284 90.3894 67.0351 90.1092ZM48.916 68.1294H37.5009C40.2808 59.0591 42.1551 52.6889 43.1154 49.039C43.4681 50.2889 43.8926 51.7359 44.3887 53.3791C45.2395 56.1973 46.1699 59.2277 47.1799 62.4704C47.9728 65.0159 48.5511 66.9011 48.916 68.1294Z'
          fill={fill.path_two}
        />
        <path
          className={props.transition}
          d='M97.6719 90.7857C97.5278 90.3875 97.4108 89.8993 97.317 89.3285C94.6151 91.4089 91.2653 92.4334 87.311 92.4334C82.9068 92.4334 79.4866 91.1849 77.1815 88.5792C74.8904 85.9893 73.8041 82.173 73.8041 77.2529V52.8651C73.8041 52.5485 73.8837 52.1869 74.1614 51.9093C74.4389 51.6317 74.8005 51.5521 75.1171 51.5521H83.6449C83.9601 51.5521 84.3128 51.6463 84.5716 51.9421C84.8153 52.2207 84.8782 52.569 84.8782 52.8651V76.6153C84.8782 79.0916 85.384 80.8235 86.2811 81.9277C87.1564 83.0049 88.4926 83.5909 90.4193 83.5909C92.8549 83.5909 94.8171 82.7478 96.3588 81.0608V52.8651C96.3588 52.5485 96.4384 52.1869 96.716 51.9093C96.9936 51.6317 97.3552 51.5521 97.6718 51.5521H106.12C106.416 51.5521 106.764 51.6149 107.043 51.8587C107.339 52.1175 107.433 52.4701 107.433 52.7854V82.513C107.433 84.9735 107.563 87.5941 107.824 90.3754C107.892 90.6968 107.878 91.1143 107.554 91.4386L107.476 91.5161L107.378 91.5651C107.118 91.6952 106.79 91.7161 106.518 91.7161H99.1064C98.8152 91.7161 98.5107 91.6622 98.2409 91.5003C97.9607 91.3322 97.7722 91.08 97.6719 90.7857Z'
          fill={fill.path_two}
        />
      </svg>
    </div>
  );
};

export default Audition;
