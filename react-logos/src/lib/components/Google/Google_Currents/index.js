import React, { useState } from 'react';

const GoogleCurrents = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? `${props.primaryWhite}c9` || '#ffffffc9'
        : '#174EA6'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#174EA6',
    path_two: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#4285F4'
      : !color
      ? props.primaryDark || '#000000'
      : '#4285F4',
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
        viewBox='0 0 256 262'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
      >
        <g>
          <path
            className={props.transition}
            d='M114.170826,80.0930115 L172.953672,211.136691 L209.771365,130.250314 L222.966744,152.728847 L232.778963,180.795075 L207.308242,236.487486 C200.30633,251.948887 187.455655,261.183292 172.944447,261.183292 C158.578351,261.183292 145.839743,252.12361 138.783508,236.931283 L138.571427,236.469035 L113.432812,180.998029 L91.3661813,130.619322 L114.170826,80.0930115 Z M68.4785101,25.2308669 C81.4465339,25.2308669 92.8617665,33.2476026 99.0983106,46.700078 L99.299836,47.1406691 L114.170826,80.0930115 L91.3661813,130.619322 L68.4785101,79.8992827 L45.3736876,130.753136 L36.4947228,159.825026 L22.6293662,180.813525 L0,130.056586 L37.6571842,47.1406691 C43.8472799,33.4228266 55.3695295,25.2308669 68.4785101,25.2308669 Z'
            fill={fill.path_one}
          ></path>
          <path
            className={props.transition}
            d='M207.446619,24.6496806 C200.472383,9.21595468 187.704735,0 173.276553,0 C158.839147,0 146.062273,9.21595468 139.097262,24.6681309 L68.4877353,181.357811 L45.5631633,130.370242 L22.6385914,180.82275 L37.6571842,214.116424 C43.8472799,227.834267 55.3695295,236.026227 68.4785101,236.026227 C81.5874906,236.026227 93.1097403,227.834267 99.299836,214.116424 L173.276553,49.9543489 L232.751288,181.016479 L255.998741,130.056586 L207.446619,24.6496806 Z'
            fill={fill.path_two}
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default GoogleCurrents;
