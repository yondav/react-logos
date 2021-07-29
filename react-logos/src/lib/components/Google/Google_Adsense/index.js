import React, { useState } from 'react';

const GoogleAdsense = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? `${props.primaryWhite}c9` || '#ffffffc9'
        : '#FBBC04'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#FBBC04',
    path_two: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#4285F4'
      : !color
      ? props.primaryDark || '#000000'
      : '#4285F4',
    path_three: props.theme
      ? !color
        ? `${props.primaryWhite}e9` || '#ffffffe9'
        : '#34A853'
      : !color
      ? `${props.primaryDark}e9` || '#000000e9'
      : '#34A853',
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
        viewBox='0 0 256 227'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
      >
        <g>
          <path
            className={props.transition}
            d='M161.800691,62.1582686 C173.381295,42.3364222 166.505246,17.0037215 146.444924,5.55478778 C126.376197,-5.87786239 100.722903,0.899434344 89.1422994,20.7212807 C88.6319054,21.6093488 88.1518024,22.5147509 87.7028658,23.4355612 L48.552583,90.410633 C47.6864015,91.7420347 46.8848291,93.114408 46.1508423,94.5230253 L5.49529122,164.6811 L78.1454539,205.40231 L118.595272,135.836398 C119.476686,134.514451 120.278784,133.141203 120.996837,131.724006 L160.14712,64.7407046 C160.714944,63.9018375 161.282593,63.0465117 161.800691,62.1582686'
            fill={fill.path_one}
          ></path>
          <path
            className={props.transition}
            d='M78.4828567,205.188698 C66.9680883,225.331313 40.9938495,232.741919 21.048563,221.120344 C1.09504723,209.49019 -5.98655988,184.2727 5.53643791,164.138314 C17.0594357,144.003927 42.8032531,136.560405 62.7567688,148.182154 C82.7102846,159.812134 89.9974501,185.054137 78.4826816,205.180468'
            fill={fill.path_three}
          ></path>
          <path
            className={props.transition}
            d='M235.256979,75.4167811 C215.426203,63.988158 190.087199,70.7559998 178.595893,90.5505318 L137.117758,162.221929 C125.690011,181.976014 132.439818,207.253736 152.193903,218.681484 C152.229622,218.702145 152.265166,218.72263 152.300885,218.743116 C172.135513,230.175941 197.481521,223.403547 208.9702,203.601136 L250.439931,131.937969 C261.865927,112.177755 255.109817,86.8961809 235.349603,75.4701842 C235.318787,75.4523248 235.287795,75.4344654 235.256979,75.4167811'
            fill={fill.path_two}
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default GoogleAdsense;
