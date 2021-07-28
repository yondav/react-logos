import React, { useState } from 'react';

const Dreamweaver = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#470137'
      : !color
      ? props.primaryDark || '#000000'
      : '#470137',
    path_two: props.theme
      ? !color
        ? props.primaryDark || '#000000'
        : '#FF61F6'
      : !color
      ? props.primaryWhite || '#ffffff'
      : '#FF61F6',
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
          d='M14.6645 35.7454L14.716 35.7444C20.6777 35.634 25.9787 35.5788 30.6185 35.5788C39.5227 35.5788 46.4095 38.0745 51.1589 43.1673C55.8818 48.2316 58.2163 54.8696 58.2163 63.011C58.2163 67.3242 57.6003 71.2126 56.3551 74.6664C55.1734 78.0416 53.6151 80.8303 51.6652 83.0096C49.7856 85.1168 47.5117 86.8769 44.8512 88.2921L44.8463 88.2947C42.2586 89.6448 39.662 90.6058 37.0571 91.172L37.0457 91.1745C34.5147 91.6807 31.8754 91.9329 29.1289 91.9329C23.9406 91.9329 19.1371 91.8777 14.7186 91.7673C14.3525 91.7644 13.9996 91.6087 13.773 91.2688C13.5777 90.9759 13.5311 90.6252 13.5311 90.3212V37.1077C13.5311 36.8221 13.5916 36.5036 13.7955 36.2317C14.0089 35.9471 14.311 35.8043 14.6137 35.7538L14.6645 35.7454ZM42.179 49.0792C39.4703 46.058 35.6502 44.5124 30.6185 44.5124C27.9332 44.5124 26.0808 44.5492 25.0302 44.618V82.8736C26.562 82.9573 28.0937 82.9992 29.6254 82.9992C34.9388 82.9992 39.0133 81.4218 41.9423 78.337C44.8569 75.2126 46.3861 70.2377 46.3861 63.2593C46.3861 56.723 44.94 52.0488 42.1876 49.0886L42.179 49.0792Z'
          fill={fill.path_two}
        />
        <path
          className={props.transition}
          d='M95.4962 90.6094L95.486 90.567C92.4546 77.8862 90.4275 69.2224 89.4089 64.5905C89.2171 65.3637 88.9926 66.2213 88.7359 67.1627C88.1263 69.5451 87.1316 73.1367 85.7534 77.9329C84.4306 82.6729 83.2733 86.8887 82.2814 90.5806C82.1993 90.9048 82.0377 91.2189 81.7512 91.4481C81.4605 91.6807 81.1144 91.7673 80.7751 91.7673H72.0028C71.6505 91.7673 71.2994 91.6883 70.993 91.484C70.6838 91.2779 70.4776 90.9824 70.353 90.6502L70.3415 90.6197L59.7356 51.6759L59.732 51.6597C59.6591 51.3318 59.6384 50.887 59.9251 50.5184C60.2164 50.1438 60.6575 50.0614 60.9959 50.0614H70.0166C70.3293 50.0614 70.6276 50.1564 70.8816 50.354C71.1257 50.5438 71.2916 50.7989 71.406 51.0658L71.4286 51.1184L71.4423 51.174C74.2212 62.4334 76.2747 71.3942 77.6007 78.0513C78.6532 73.6751 80.8939 64.7347 84.316 51.2523L84.3255 51.2148L84.3391 51.1786C84.4462 50.8931 84.6026 50.6153 84.8402 50.4041C85.0922 50.1801 85.4027 50.0614 85.7406 50.0614H94.2647C94.5741 50.0614 94.8986 50.1566 95.1537 50.4117C95.3843 50.6422 95.4888 50.9348 95.5326 51.2055C98.716 64.2449 100.835 73.2319 101.882 78.1475C103.374 70.965 105.517 61.9812 108.308 51.1991C108.361 50.8864 108.506 50.5771 108.793 50.354C109.081 50.1297 109.425 50.0614 109.74 50.0614H117.851C118.142 50.0614 118.524 50.1331 118.797 50.4512C119.068 50.7673 119.083 51.155 119.042 51.4413L119.034 51.4922L107.416 90.6625L107.388 90.7176C107.088 91.3182 106.58 91.7673 105.851 91.7673H96.9957C96.6592 91.7673 96.3352 91.6674 96.0611 91.4481C95.7967 91.2367 95.6242 90.9509 95.5115 90.6502L95.4962 90.6094Z'
          fill={fill.path_two}
        />
      </svg>
    </div>
  );
};

export default Dreamweaver;
