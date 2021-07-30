import React, { useState } from 'react';

const GoogleDrive = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#0066DA'
      : !color
      ? props.primaryDark || '#000000'
      : '#0066DA',
    path_two: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#EA4335'
      : !color
      ? props.primaryDark || '#000000'
      : '#EA4335',
    path_three: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#00832D'
      : !color
      ? props.primaryDark || '#000000'
      : '#00832D',
    path_four: props.theme
      ? !color
        ? `${props.primaryWhite}c9` || '#ffffffc9'
        : '#2684FC'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#2684FC',
    path_five: props.theme
      ? !color
        ? `${props.primaryWhite}c9` || '#ffffffc9'
        : '#00AC47'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#00AC47',
    path_six: props.theme
      ? !color
        ? `${props.primaryWhite}c9` || '#ffffffc9'
        : '#FFBA00'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#FFBA00',
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
        viewBox='0 0 256 229'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
      >
        <g>
          <path
            className={props.transition}
            d='M19.3542312,196.033928 L30.644172,215.534816 C32.9900287,219.64014 36.3622164,222.86588 40.3210929,225.211737 C51.6602421,210.818376 59.5534225,199.772864 64.000634,192.075201 C68.5137119,184.263529 74.0609657,172.045039 80.6423954,155.41973 C62.9064315,153.085282 49.4659974,151.918058 40.3210929,151.918058 C31.545465,151.918058 18.1051007,153.085282 0,155.41973 C0,159.964996 1.17298825,164.510261 3.51893479,168.615586 L19.3542312,196.033928 Z'
            fill={fill.path_one}
          ></path>
          <path
            className={props.transition}
            d='M215.681443,225.211737 C219.64032,222.86588 223.012507,219.64014 225.358364,215.534816 L230.050377,207.470615 L252.483511,168.615586 C254.829368,164.510261 256.002446,159.964996 256.002446,155.41973 C237.79254,153.085282 224.376613,151.918058 215.754667,151.918058 C206.488712,151.918058 193.072785,153.085282 175.506888,155.41973 C182.010479,172.136093 187.484394,184.354584 191.928633,192.075201 C196.412073,199.863919 204.329677,210.909431 215.681443,225.211737 Z'
            fill={fill.path_two}
          ></path>
          <path
            className={props.transition}
            d='M128.001268,73.3111515 C141.121182,57.4655263 150.162898,45.2470011 155.126415,36.6555757 C159.123121,29.7376196 163.521739,18.6920726 168.322271,3.51893479 C164.363395,1.1729583 159.818129,0 155.126415,0 L100.876121,0 C96.1841079,0 91.638842,1.31958557 87.6799655,3.51893479 C93.7861943,20.9210065 98.9675428,33.3058067 103.224011,40.6733354 C107.927832,48.8151881 116.186918,59.6944602 128.001268,73.3111515 Z'
            fill={fill.path_three}
          ></path>
          <path
            className={props.transition}
            d='M175.360141,155.41973 L80.6420959,155.41973 L40.3210929,225.211737 C44.2799694,227.557893 48.8252352,228.730672 53.5172481,228.730672 L202.485288,228.730672 C207.177301,228.730672 211.722567,227.411146 215.681443,225.211737 L175.360141,155.41973 Z'
            fill={fill.path_four}
          ></path>
          <path
            className={props.transition}
            d='M128.001268,73.3111515 L87.680265,3.51893479 C83.7213885,5.86488134 80.3489013,9.09044179 78.0030446,13.1960654 L3.51893479,142.223575 C1.17298825,146.329198 0,150.874464 0,155.41973 L80.6423954,155.41973 L128.001268,73.3111515 Z'
            fill={fill.path_five}
          ></path>
          <path
            className={props.transition}
            d='M215.241501,77.7099697 L177.999492,13.1960654 C175.653635,9.09044179 172.281148,5.86488134 168.322271,3.51893479 L128.001268,73.3111515 L175.360141,155.41973 L255.855999,155.41973 C255.855999,150.874464 254.682921,146.329198 252.337064,142.223575 L215.241501,77.7099697 Z'
            fill={fill.path_six}
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default GoogleDrive;
