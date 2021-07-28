import React, { useState } from 'react';

const Prelude = (props) => {
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
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M65.4066 68.9091L65.4053 68.91C61.2242 71.9357 55.9461 73.4238 49.62 73.4238H46.9699L46.9512 73.4228C46.634 73.4051 46.3668 73.3905 46.1494 73.3787V90.4496C46.1494 90.765 46.0551 91.1178 45.7592 91.3768C45.4804 91.6207 45.132 91.6835 44.8358 91.6835H36.3837C36.0935 91.6835 35.7517 91.6105 35.4872 91.3461C35.2228 91.0816 35.1498 90.7398 35.1498 90.4496V38.9397C35.1498 38.6728 35.2048 38.3465 35.4321 38.0814C35.6731 37.8002 36.0015 37.7084 36.2917 37.7059C39.7038 37.5994 44.4932 37.5464 50.6565 37.5464C57.7579 37.5464 63.1209 39.1847 66.5954 42.6005C70.0824 45.9233 71.8246 50.1154 71.8246 55.1263C71.8246 61.1514 69.7035 65.784 65.4066 68.9091ZM58.1739 48.6079L58.1666 48.6011C56.4702 47.0016 54.0011 46.1539 50.6565 46.1539C48.4662 46.1539 46.9775 46.1868 46.1494 46.2453V64.6429C46.9648 64.7037 48.2731 64.7366 50.0984 64.7366C53.3418 64.7366 55.928 63.9915 57.9101 62.5561C59.8069 61.1311 60.825 58.7676 60.825 55.2857C60.825 52.3527 59.9214 50.1613 58.1813 48.6145L58.1739 48.6079Z'
          fill={fill.path_two}
        />
        <path
          className={props.transition}
          d='M91.6646 84.042L91.7198 84.0328H91.7757C92.0485 84.0328 92.3647 84.1205 92.5939 84.3956C92.8034 84.647 92.8502 84.9503 92.8502 85.187V90.1307C92.8502 90.4367 92.8004 90.753 92.648 91.0323C92.4901 91.3218 92.2437 91.5303 91.9363 91.6397C90.5525 92.212 88.8141 92.4809 86.7523 92.4809C83.9226 92.4809 81.6338 91.7295 79.9841 90.1387C78.2936 88.5086 77.5448 85.7477 77.5448 82.0773V34.7137C77.5448 34.3983 77.6391 34.0455 77.935 33.7865C78.2137 33.5427 78.5621 33.4798 78.8584 33.4798H87.2307C87.5389 33.4798 87.8944 33.5365 88.1838 33.7617C88.5056 34.0119 88.6241 34.3718 88.6241 34.7137V82.157C88.6241 82.9894 88.7924 83.4887 89.0158 83.7701C89.2156 84.0217 89.5345 84.1923 90.1013 84.1923C90.5321 84.1923 91.0516 84.1442 91.6646 84.042Z'
          fill={fill.path_two}
        />
      </svg>
    </div>
  );
};

export default Prelude;
