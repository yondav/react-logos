import React, { useState } from 'react';

const GoogleAnalytics = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? `${props.primaryWhite}c9` || '#ffffffc9'
        : '#F9AB00'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#F9AB00',
    path_two: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#E37400'
      : !color
      ? props.primaryDark || '#000000'
      : '#E37400',
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
        viewBox='0 0 256 284'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
      >
        <g>
          <path
            className={props.transition}
            d='M256.003159,247.933017 C256.055907,258.030289 251.77298,267.664804 244.241349,274.390297 C236.709718,281.11579 226.653817,284.285366 216.626905,283.094249 C198.58347,280.424364 185.360959,264.722632 185.800619,246.488035 L185.800619,36.8452103 C185.364944,18.5907614 198.619678,2.88144681 216.687112,0.238996295 C226.704325,-0.933476157 236.743571,2.24455542 244.261279,8.9678962 C251.778988,15.691237 256.053811,25.3147619 256.003159,35.4002282 L256.003159,247.933017 Z'
            fill={fill.path_one}
          ></path>
          <path
            className={props.transition}
            d='M35.1010243,213.193238 C54.4867848,213.193238 70.2020487,228.908502 70.2020487,248.294263 C70.2020487,267.680023 54.4867848,283.395287 35.1010243,283.395287 C15.7152639,283.395287 0,267.680023 0,248.294263 C0,228.908502 15.7152639,213.193238 35.1010243,213.193238 Z M127.459466,106.806429 C107.981896,107.874068 92.8698765,124.212107 93.3217628,143.713681 L93.3217628,237.998765 C93.3217628,263.58699 104.580582,279.120548 121.077461,282.431965 C131.434034,284.530959 142.185473,281.860819 150.356699,275.160414 C158.527925,268.460009 163.252393,258.439904 163.222912,247.872809 L163.222912,142.088076 C163.240039,132.641687 159.462041,123.584285 152.737293,116.950107 C146.012546,110.315928 136.904752,106.661084 127.459466,106.806429 L127.459466,106.806429 Z'
            fill={fill.path_two}
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default GoogleAnalytics;
