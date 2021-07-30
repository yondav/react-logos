import React, { useState } from 'react';

const GoogleEarth = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? `${props.primaryWhite}` || '#ffffff'
        : '#255fdb'
      : !color
      ? `${props.primaryDark}` || '#000000'
      : '#255fdb',
    path_two: props.theme
      ? !color
        ? `${props.primaryWhite}c9` || '#ffffffc9'
        : '#4285f4'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#4285f4',
    path_three: props.theme
      ? !color
        ? `${props.primaryWhite}a9` || '#ffffffa9'
        : '#91bfff'
      : !color
      ? `${props.primaryDark}a9` || '#000000a9'
      : '#91bfff',
    path_four: props.theme
      ? !color
        ? `${props.primaryWhite}59` || '#ffffff59'
        : '#c4e1ff'
      : !color
      ? `${props.primaryDark}59` || '#00000059'
      : '#c4e1ff',
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
        version='1.1'
        id='Livello_1'
        x='0px'
        y='0px'
        className={props.transition}
        width={props.width || 128}
        height={props.height || 128}
        viewBox='0 0 4481.832 4482.661'
        enable-background='new 0 0 4481.832 4482.661'
      >
        <g id='g61'>
          <path
            className={props.transition}
            fill={fill.path_one}
            d='M 1545.47,2708.41 C 781.522,1697.707 -2.797,2465.729 201.941,3172.126 c 514.98,1126.319 1845.516,1621.908 2971.834,1106.928 388.227,-177.507 717.722,-462.139 949.765,-820.448 -590.532,553.099 -1662.86,460.662 -2578.07,-750.196 z'
            id='path4'
          />
          <path
            className={props.transition}
            fill={fill.path_two}
            d='M 2228.44,2012.453 C 1177.757,418.858 0.004,1268.113 0.004,2241.638 -0.421,2564.056 69.083,2882.732 203.723,3175.691 63.921,2515.895 822.012,2007.106 1527.9,2954.146 c 1024.964,1375.106 2030.828,1133.189 2593.604,507.516 180.738,-277.449 297.472,-591.64 341.739,-919.793 v 4.329 C 4221.58,3295.886 3155.108,3417.863 2228.44,2012.453 Z'
            id='path6'
          />
          <path
            className={props.transition}
            fill={fill.path_three}
            d='M 2948.588,1299.435 C 2168.343,12.183 1179.03,128.048 509.302,817.893 179.168,1218.827 -0.925,1722.277 0.004,2241.638 c 70.029,-942.202 1209.584,-1597.924 2240.914,0 916.738,1422.217 2058.84,1051.702 2221.306,308.635 v -7.13 c 14.218,-101.209 20.265,-203.399 18.08,-305.579 v -101.86 c -396.998,284.188 -919.03,174.434 -1531.716,-836.269 z'
            id='path8'
          />
          <path
            className={props.transition}
            fill={fill.path_four}
            d='m 2953.936,1528.62 c 714.546,1148.723 1330.543,854.858 1527.896,609.121 -7.978,-171.708 -35.749,-341.922 -82.761,-507.261 -333.082,6.875 -410.75,-48.638 -738.483,-547.751 C 3159.692,315.216 2528.671,-202.996 1426.04,153.513 1068.788,293.635 753.238,522.671 509.302,818.912 1266.884,121.682 2196.354,310.887 2953.936,1528.62 Z'
            id='path10'
          />
        </g>
        <circle
          className={props.transition}
          fill='url(#SVGID_1_)'
          fill-opacity='0.1'
          cx='2240.918'
          cy='2241.6379'
          r='2240.9141'
          id='circle27'
        />
      </svg>
    </div>
  );
};

export default GoogleEarth;
