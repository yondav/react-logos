import React, { useState } from 'react';

const GoogleDocs = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? `${props.primaryWhite}d9` || '#ffffffd9'
        : '#4285F4'
      : !color
      ? `${props.primaryDark}d9` || '#000000d9'
      : '#4285F4',
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
        : '#A1C2FA'
      : !color
      ? `${props.primaryDark}e9` || '#000000e9'
      : '#A1C2FA',
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
        viewBox='0 0 47 65'
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
            id='Consumer-Apps-Docs-Large-VD-R8'
            transform='translate(-451.000000, -463.000000)'
          >
            <g id='Hero' transform='translate(0.000000, 63.000000)'>
              <g id='Personal' transform='translate(277.000000, 309.000000)'>
                <g id='Docs-icon' transform='translate(174.000000, 91.000000)'>
                  <g id='Group'>
                    <g id='Clipped'>
                      <g id='SVGID_1_'></g>
                      <path
                        className={props.transition}
                        d='M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L36.71875,10.3409091 L29.375,0 Z'
                        id='Path'
                        fill={fill.path_one}
                        fillRule='nonzero'
                        mask='url(#mask-2)'
                      ></path>
                    </g>
                    <g id='Clipped'>
                      <g id='SVGID_1_'></g>
                      <polygon
                        className={props.transition}
                        id='Path'
                        fill='url(#linearGradient-5)'
                        fillRule='nonzero'
                        mask='url(#mask-4)'
                        points='30.6638281 16.4309659 47 32.8582386 47 17.7272727'
                      ></polygon>
                    </g>
                    <g id='Clipped'>
                      <g id='SVGID_1_'></g>
                      <path
                        className={props.transition}
                        d='M11.75,47.2727273 L35.25,47.2727273 L35.25,44.3181818 L11.75,44.3181818 L11.75,47.2727273 Z M11.75,53.1818182 L29.375,53.1818182 L29.375,50.2272727 L11.75,50.2272727 L11.75,53.1818182 Z M11.75,32.5 L11.75,35.4545455 L35.25,35.4545455 L35.25,32.5 L11.75,32.5 Z M11.75,41.3636364 L35.25,41.3636364 L35.25,38.4090909 L11.75,38.4090909 L11.75,41.3636364 Z'
                        id='Shape'
                        fill={fill.path_two}
                        fillRule='nonzero'
                        mask='url(#mask-7)'
                      ></path>
                    </g>
                    <g id='Clipped'>
                      <g id='SVGID_1_'></g>
                      <g id='Group' mask='url(#mask-9)'>
                        <g transform='translate(26.437500, -2.954545)'>
                          <path
                            className={props.transition}
                            d='M2.9375,2.95454545 L2.9375,16.25 C2.9375,18.6985795 4.90929688,20.6818182 7.34375,20.6818182 L20.5625,20.6818182 L2.9375,2.95454545 Z'
                            id='Path'
                            fill={fill.path_three}
                            fillRule='nonzero'
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g id='Clipped'>
                      <g id='SVGID_1_'></g>
                      <path
                        className={props.transition}
                        d='M4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,4.80113636 C0,2.36363636 1.9828125,0.369318182 4.40625,0.369318182 L29.375,0.369318182 L29.375,0 L4.40625,0 Z'
                        id='Path'
                        fillOpacity='0.2'
                        fill='#FFFFFF'
                        fillRule='nonzero'
                        mask='url(#mask-11)'
                      ></path>
                    </g>
                    <g id='Clipped'>
                      <g id='SVGID_1_'></g>
                      <path
                        className={props.transition}
                        d='M42.59375,64.6306818 L4.40625,64.6306818 C1.9828125,64.6306818 0,62.6363636 0,60.1988636 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,60.1988636 C47,62.6363636 45.0171875,64.6306818 42.59375,64.6306818 Z'
                        id='Path'
                        fillOpacity='0.2'
                        fill='#1A237E'
                        fillRule='nonzero'
                        mask='url(#mask-13)'
                      ></path>
                    </g>
                    <g id='Clipped'>
                      <g id='SVGID_1_'></g>
                      <path
                        className={props.transition}
                        d='M33.78125,17.7272727 C31.3467969,17.7272727 29.375,15.7440341 29.375,13.2954545 L29.375,13.6647727 C29.375,16.1133523 31.3467969,18.0965909 33.78125,18.0965909 L47,18.0965909 L47,17.7272727 L33.78125,17.7272727 Z'
                        id='Path'
                        fillOpacity='0.1'
                        fill='#1A237E'
                        fillRule='nonzero'
                        mask='url(#mask-15)'
                      ></path>
                    </g>
                  </g>
                  <path
                    className={props.transition}
                    d='M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z'
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

export default GoogleDocs;
