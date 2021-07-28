import React, { useState } from 'react';

const InCopy = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#49021F'
      : !color
      ? props.primaryDark || '#000000'
      : '#49021F',
    path_two: props.theme
      ? !color
        ? props.primaryDark || '#000000'
        : '#FF3366'
      : !color
      ? props.primaryWhite || '#ffffff'
      : '#FF3366',
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
          d='M74.7071 80.6118C76.7855 82.638 79.3075 83.6499 82.3152 83.6499C84.7353 83.6499 86.7456 83.3074 88.3673 82.6486L88.4015 82.6347L88.437 82.6246C88.6911 82.552 89.0956 82.494 89.4485 82.7461C89.813 83.0065 89.8772 83.4184 89.8772 83.6883V89.9175C89.8772 90.1827 89.8305 90.4623 89.6898 90.7156C89.5426 90.9806 89.3172 91.1713 89.0445 91.281C86.8246 92.1911 83.8665 92.6256 80.2118 92.6256C73.9684 92.6256 69.0217 90.7132 65.4672 86.8202C61.932 82.9483 60.1913 77.8908 60.1913 71.7152C60.1913 65.5707 62.1349 60.4578 66.0482 56.4327C69.9705 52.3983 75.1191 50.4003 81.4253 50.4003C84.7418 50.4003 87.3102 50.7504 89.0597 51.5085L89.1502 51.5477L89.226 51.6109C89.618 51.9375 89.9581 52.3815 89.9581 52.9465V52.9553L89.8772 59.2567L89.8772 59.2615C89.8764 59.562 89.8027 59.979 89.4411 60.2501C89.0857 60.5167 88.6665 60.4793 88.3781 60.4072L88.3051 60.3889L88.2378 60.3553C86.6339 59.5534 84.5895 59.1333 82.0725 59.1333C78.8551 59.1333 76.3279 60.2468 74.4205 62.4554C72.5603 64.6178 71.5939 67.571 71.5939 71.3916C71.5939 75.536 72.6673 78.5701 74.7071 80.6118Z'
          fill={fill.path_two}
        />
        <path
          className={props.transition}
          d='M51.5718 37.5287C51.8192 37.8115 51.883 38.165 51.883 38.4656V90.4838C51.883 90.8136 51.8114 91.189 51.548 91.4854C51.2709 91.7971 50.8939 91.8975 50.5502 91.8975H42.0558C41.7121 91.8975 41.3351 91.7971 41.0579 91.4854C40.7945 91.189 40.723 90.8136 40.723 90.4838V38.4656C40.723 38.1442 40.8038 37.7772 41.0856 37.4954C41.3674 37.2136 41.7343 37.1328 42.0558 37.1328H50.6311C50.9511 37.1328 51.309 37.2284 51.5718 37.5287Z'
          fill={fill.path_two}
        />
      </svg>
    </div>
  );
};

export default InCopy;
