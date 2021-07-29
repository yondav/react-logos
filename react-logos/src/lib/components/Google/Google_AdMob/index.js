import React, { useState } from 'react';

const GoogleAdMob = (props) => {
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
        ? `${props.primaryWhite}c9` || '#ffffffc9'
        : '#4285F4'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#4285F4',
    path_three: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#EA4335'
      : !color
      ? props.primaryDark || '#000000'
      : '#EA4335',
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
        viewBox='0 0 256 256'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
      >
        <g>
          <path
            className={props.transition}
            d='M122.1632,0.4096 C125.8496,0.1024 129.4336,0 133.12,0 C199.7824,2.4576 253.3376,55.9104 256,122.5728 L256,223.232 C255.8976,241.4592 241.0496,256.1024 222.9248,256.000534 C206.336,253.44 193.6384,239.9232 192.1024,223.232 L192.1024,122.5728 C189.3376,87.4496 158.6176,61.1328 123.4944,63.8976 C123.0848,63.8976 122.6752,64 122.2656,64'
            fill={fill.path_one}
          ></path>
          <path
            className={props.transition}
            d='M256,223.9488 C256,241.5616 241.664,255.8976 224.0512,255.8976 C206.4384,255.8976 192.1024,241.5616 192.1024,223.9488 C192.1024,206.336 206.4384,192 224.0512,192 C241.664,192 256,206.336 256,223.9488 Z'
            fill={fill.path_two}
          ></path>
          <path
            className={props.transition}
            d='M124.0064,254.8736 C142.1312,255.0784 156.9792,240.64 157.184,222.5152 C157.184,222.4128 157.184,222.4128 157.184,222.3104 C156.672,204.6976 141.9264,190.7712 124.3136,191.2832 C124.1088,191.2832 123.8016,191.2832 123.5968,191.2832 C88.6784,188.6208 62.3616,158.3104 64.8192,123.2896 L64.8192,122.7776 C67.3792,91.2384 92.4672,66.3552 124.0064,64 C141.6192,64.7168 156.4672,50.9952 157.184,33.3824 C157.184,33.1776 157.184,33.0752 157.184,32.8704 C156.9792,14.7456 142.1312,0.1024 124.0064,0.305077636 C124.0064,0.305077636 124.0064,0.305077636 124.0064,0.305077636 L121.7536,0.305077636 C53.8624,3.4816 0.4096,59.1872 0,127.1808 L0,127.6928 C0,207.4624 69.9392,254.976 122.0608,254.976 L124.0064,254.976 L124.0064,254.8736 Z'
            fill={fill.path_three}
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default GoogleAdMob;
