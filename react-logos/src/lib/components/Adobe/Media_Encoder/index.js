import React, { useState } from 'react';

const MediaEncoder = (props) => {
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
          x='-0.25'
          width='128'
          height='128'
          fill={fill.path_one}
        />
        <path
          className={props.transition}
          d='M41.7655 56.9004C44.4552 66.1352 46.2272 72.4303 47.0748 75.7674C47.9223 72.4303 49.6943 66.1352 52.3841 56.9004L52.3849 56.8974C55.6393 45.9074 57.4504 39.7548 57.8219 38.4279L57.8264 38.412L57.8316 38.3963C57.917 38.1402 58.065 37.8906 58.308 37.7083C58.554 37.5238 58.8382 37.4528 59.1147 37.4528H71.3543C71.6013 37.4528 71.8826 37.5035 72.1283 37.679C72.3872 37.864 72.5252 38.1288 72.579 38.3977L72.5894 38.4496L74.7505 90.2358C74.7848 90.5581 74.7338 90.9477 74.4335 91.248C74.1421 91.5394 73.7515 91.6065 73.4342 91.6065H64.6345C64.3373 91.6065 63.9877 91.5435 63.7081 91.2988C63.4136 91.0411 63.3181 90.6907 63.3166 90.3763C62.9664 72.6467 62.8137 59.4008 62.8589 50.6445C61.0504 57.3096 57.4058 70.6148 51.9288 90.5482L51.9165 90.593L51.8982 90.6357C51.7807 90.9098 51.6035 91.1622 51.3438 91.344C51.0804 91.5284 50.7797 91.6065 50.4751 91.6065H43.6745C43.3699 91.6065 43.0692 91.5284 42.8057 91.344C42.5461 91.1622 42.3688 90.9098 42.2514 90.6357L42.2331 90.593L42.2208 90.5482C36.7438 70.6148 33.0992 57.3096 31.2906 50.6445C31.3358 59.4008 31.1831 72.6467 30.8329 90.3763C30.8314 90.6907 30.736 91.0411 30.4414 91.2988C30.1618 91.5435 29.8123 91.6065 29.515 91.6065H20.7154C20.3981 91.6065 20.0075 91.5394 19.716 91.248C19.4157 90.9477 19.3647 90.5581 19.3991 90.2358L21.5602 38.4496L21.5705 38.3977C21.6243 38.1288 21.7624 37.864 22.0213 37.679C22.267 37.5035 22.5482 37.4528 22.7953 37.4528H35.0348C35.3113 37.4528 35.5955 37.5238 35.8416 37.7083C36.0846 37.8906 36.2326 38.1402 36.3179 38.3963L36.3232 38.412L36.3276 38.4279C36.6992 39.7548 38.5103 45.9074 41.7646 56.8974L41.7655 56.9004Z'
          fill={fill.path_two}
        />
        <path
          className={props.transition}
          fillRule='evenodd'
          clipRule='evenodd'
          d='M109.299 90.1855L109.381 90.1477L109.451 90.0895C109.906 89.7108 110.175 89.2081 110.175 88.6087V82.7689C110.175 82.6274 110.163 82.4682 110.116 82.3142C110.071 82.1624 109.972 81.9509 109.753 81.8049C109.519 81.649 109.267 81.6455 109.08 81.6872C108.932 81.72 108.803 81.784 108.697 81.8492C106.141 82.9649 103.212 83.5309 99.8975 83.5309C96.2788 83.5309 93.6867 82.5764 91.9904 80.7831C90.3903 79.0917 89.482 76.8011 89.3199 73.8473H103.257C107.3 73.8473 110.069 73.742 111.516 73.52C111.81 73.4774 112.103 73.3617 112.336 73.1287C112.562 72.9034 112.677 72.6218 112.723 72.3377C112.952 71.3449 113.055 69.7377 113.055 67.5696C113.055 63.0511 111.701 59.0871 108.988 55.708C106.265 52.2498 102.121 50.5723 96.6976 50.5723C90.9682 50.5723 86.3931 52.6218 83.0516 56.743C79.739 60.8285 78.1004 65.8927 78.1004 71.8894C78.1004 77.6703 79.6576 82.5472 82.8095 86.4733L82.8162 86.4814C86.0796 90.42 91.1315 92.3265 97.8176 92.3265C102.311 92.3265 106.147 91.6232 109.299 90.1855ZM89.3826 66.3316C89.7003 64.1013 90.4083 62.2858 91.4802 60.8566C92.618 59.3395 94.2198 58.5679 96.3777 58.5679C98.6147 58.5679 100.104 59.3021 101.013 60.6659C102.002 62.1483 102.499 63.8293 102.499 65.7296C102.499 65.9405 102.495 66.1145 102.488 66.2555C102.318 66.2694 102.106 66.2817 101.85 66.2922C101.21 66.3183 100.321 66.3316 99.1776 66.3316H89.3826Z'
          fill={fill.path_two}
        />
      </svg>
    </div>
  );
};

export default MediaEncoder;