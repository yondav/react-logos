import React, { useState } from 'react';

const GoogleSlides = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? `${props.primaryWhite}c9` || '#ffffffc9'
        : '#F4B400'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#F4B400',
    path_two: props.theme
      ? !color
        ? `${props.primaryDark}c9` || '#ffffffc9'
        : '#F1F1F1'
      : !color
      ? `${props.primaryWhite}c9` || '#000000c9'
      : '#F1F1F1',
    path_three: props.theme
      ? !color
        ? `${props.primaryWhite}c9` || '#ffffffc9'
        : '#FADA80'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#FADA80',
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
        viewBox='0 0 48 66'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g
          id='Page-1'
          stroke='none'
          stroke-width='1'
          fill='none'
          fillRule='evenodd'
        >
          <g
            id='Consumer-Apps-Slides-Large-VD-R8'
            transform='translate(-449.000000, -452.000000)'
          >
            <g id='Hero' transform='translate(0.000000, 63.000000)'>
              <g id='Personal' transform='translate(277.000000, 299.000000)'>
                <g
                  id='Slides-icon'
                  transform='translate(172.000000, 90.000000)'
                >
                  <g id='Group'>
                    <g id='Clipped'>
                      <g id='SVGID_1_'></g>
                      <path
                        className={props.transition}
                        d='M29.5833333,0 L4.4375,0 C1.996875,0 0,1.996875 0,4.4375 L0,60.6458333 C0,63.0864583 1.996875,65.0833333 4.4375,65.0833333 L42.8958333,65.0833333 C45.3364583,65.0833333 47.3333333,63.0864583 47.3333333,60.6458333 L47.3333333,17.75 L36.9791667,10.3541667 L29.5833333,0 Z'
                        id='Path'
                        fill={fill.path_one}
                        fillRule='nonzero'
                        mask='url(#mask-2)'
                      ></path>
                    </g>
                    <g id='Clipped'>
                      <g id='SVGID_1_'></g>
                      <path
                        className={props.transition}
                        d='M33.28125,29.5833333 L14.0520833,29.5833333 C12.8317708,29.5833333 11.8333333,30.5817708 11.8333333,31.8020833 L11.8333333,51.03125 C11.8333333,52.2515625 12.8317708,53.25 14.0520833,53.25 L33.28125,53.25 C34.5015625,53.25 35.5,52.2515625 35.5,51.03125 L35.5,31.8020833 C35.5,30.5817708 34.5015625,29.5833333 33.28125,29.5833333 Z M32.5416667,46.59375 L14.7916667,46.59375 L14.7916667,36.2395833 L32.5416667,36.2395833 L32.5416667,46.59375 Z'
                        id='Shape'
                        fill={fill.path_two}
                        fillRule='nonzero'
                        mask='url(#mask-4)'
                      ></path>
                    </g>
                    <g id='Clipped'>
                      <g id='SVGID_1_'></g>
                      <g id='Group' mask='url(#mask-9)'>
                        <g transform='translate(26.625000, -2.958333)'>
                          <path
                            className={props.transition}
                            d='M2.95833333,2.95833333 L2.95833333,16.2708333 C2.95833333,18.7225521 4.94411458,20.7083333 7.39583333,20.7083333 L20.7083333,20.7083333 L2.95833333,2.95833333 Z'
                            id='Path'
                            fill={fill.path_three}
                            fillRule='nonzero'
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default GoogleSlides;
