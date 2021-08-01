import React, { useState } from 'react';

const GoogleForms = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? `${props.primaryWhite}d9` || '#ffffffd9'
        : '#673AB7'
      : !color
      ? `${props.primaryDark}d9` || '#000000d9'
      : '#673AB7',
    path_two: props.theme
      ? !color
        ? props.primaryDark || '#000000'
        : '#ffffff'
      : !color
      ? props.primaryWhite || '#ffffff'
      : '#ffffff',
    path_three: props.theme
      ? !color
        ? `${props.primaryWhite}e9` || '#ffffffe9'
        : '#B39DDB'
      : !color
      ? `${props.primaryDark}e9` || '#000000e9'
      : '#B39DDB',
    path_four: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#EB4335'
      : !color
      ? props.primaryDark || '#000000'
      : '#EB4335',
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
          strokeWidth='1'
          fill='none'
          fillRule='evenodd'
        >
          <g
            id='Consumer-Apps-Forms-Large-VD-R8'
            transform='translate(-449.000000, -452.000000)'
          >
            <g id='Hero' transform='translate(0.000000, 63.000000)'>
              <g id='Personal' transform='translate(277.000000, 299.000000)'>
                <g id='Forms-icon' transform='translate(172.000000, 90.000000)'>
                  <g id='Group'>
                    <g id='Clipped'>
                      <g id='SVGID_20_'></g>
                      <path
                        d='M29.5833333,0 L4.4375,0 C1.996875,0 0,1.996875 0,4.4375 L0,60.6458333 C0,63.0864583 1.996875,65.0833333 4.4375,65.0833333 L42.8958333,65.0833333 C45.3364583,65.0833333 47.3333333,63.0864583 47.3333333,60.6458333 L47.3333333,17.75 L36.9791667,10.3541667 L29.5833333,0 Z'
                        id='Path'
                        fill={fill.path_one}
                        fillRule='nonzero'
                        mask='url(#mask-2)'
                      ></path>
                    </g>
                    <g id='Clipped'>
                      <g id='SVGID_20_'></g>
                      <path
                        className={props.transition}
                        d='M19.2291667,50.2916667 L35.5,50.2916667 L35.5,47.3333333 L19.2291667,47.3333333 L19.2291667,50.2916667 Z M19.2291667,32.5416667 L19.2291667,35.5 L35.5,35.5 L35.5,32.5416667 L19.2291667,32.5416667 Z M15.53125,34.0208333 C15.53125,35.2448438 14.5365104,36.2395833 13.3125,36.2395833 C12.0884896,36.2395833 11.09375,35.2448438 11.09375,34.0208333 C11.09375,32.7968229 12.0884896,31.8020833 13.3125,31.8020833 C14.5365104,31.8020833 15.53125,32.7968229 15.53125,34.0208333 Z M15.53125,41.4166667 C15.53125,42.6406771 14.5365104,43.6354167 13.3125,43.6354167 C12.0884896,43.6354167 11.09375,42.6406771 11.09375,41.4166667 C11.09375,40.1926563 12.0884896,39.1979167 13.3125,39.1979167 C14.5365104,39.1979167 15.53125,40.1926563 15.53125,41.4166667 Z M15.53125,48.8125 C15.53125,50.0365104 14.5365104,51.03125 13.3125,51.03125 C12.0884896,51.03125 11.09375,50.0365104 11.09375,48.8125 C11.09375,47.5884896 12.0884896,46.59375 13.3125,46.59375 C14.5365104,46.59375 15.53125,47.5884896 15.53125,48.8125 Z M19.2291667,42.8958333 L35.5,42.8958333 L35.5,39.9375 L19.2291667,39.9375 L19.2291667,42.8958333 Z'
                        id='Shape'
                        fill={fill.path_two}
                        fillRule='nonzero'
                        mask='url(#mask-4)'
                      ></path>
                    </g>
                    <g id='Clipped'>
                      <g id='SVGID_20_'></g>
                      <polygon
                        className={props.transition}
                        id='Path'
                        fill='url(#linearGradient-7)'
                        fillRule='nonzero'
                        mask='url(#mask-6)'
                        points='30.8813021 16.4520313 47.3333333 32.9003646 47.3333333 17.75'
                      ></polygon>
                    </g>
                    <g id='Clipped'>
                      <g id='SVGID_20_'></g>
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
                    <g id='Clipped'>
                      <g id='SVGID_20_'></g>
                      <path
                        className={props.transition}
                        d='M4.4375,0 C1.996875,0 0,1.996875 0,4.4375 L0,4.80729167 C0,2.36666667 1.996875,0.369791667 4.4375,0.369791667 L29.5833333,0.369791667 L29.5833333,0 L4.4375,0 Z'
                        id='Path'
                        fillOpacity='0.2'
                        fill='#FFFFFF'
                        fillRule='nonzero'
                        mask='url(#mask-11)'
                      ></path>
                    </g>
                    <g id='Clipped'>
                      <g id='SVGID_20_'></g>
                      <path
                        className={props.transition}
                        d='M42.8958333,64.7135417 L4.4375,64.7135417 C1.996875,64.7135417 0,62.7166667 0,60.2760417 L0,60.6458333 C0,63.0864583 1.996875,65.0833333 4.4375,65.0833333 L42.8958333,65.0833333 C45.3364583,65.0833333 47.3333333,63.0864583 47.3333333,60.6458333 L47.3333333,60.2760417 C47.3333333,62.7166667 45.3364583,64.7135417 42.8958333,64.7135417 Z'
                        id='Path'
                        fillOpacity='0.2'
                        fill='#311B92'
                        fillRule='nonzero'
                        mask='url(#mask-13)'
                      ></path>
                    </g>
                    <g id='Clipped'>
                      <g id='SVGID_20_'></g>
                      <path
                        className={props.transition}
                        d='M34.0208333,17.75 C31.5691146,17.75 29.5833333,15.7642187 29.5833333,13.3125 L29.5833333,13.6822917 C29.5833333,16.1340104 31.5691146,18.1197917 34.0208333,18.1197917 L47.3333333,18.1197917 L47.3333333,17.75 L34.0208333,17.75 Z'
                        id='Path'
                        fillOpacity='0.1'
                        fill='#311B92'
                        fillRule='nonzero'
                        mask='url(#mask-15)'
                      ></path>
                    </g>
                  </g>
                  <path
                    className={props.transition}
                    d='M29.5833333,0 L4.4375,0 C1.996875,0 0,1.996875 0,4.4375 L0,60.6458333 C0,63.0864583 1.996875,65.0833333 4.4375,65.0833333 L42.8958333,65.0833333 C45.3364583,65.0833333 47.3333333,63.0864583 47.3333333,60.6458333 L47.3333333,17.75 L29.5833333,0 Z'
                    id='Path'
                    fill='url(#radialGradient-16)'
                    fillRule='nonzero'
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default GoogleForms;
