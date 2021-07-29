import React, { useState } from 'react';

const GoogleCloudFunction = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#4285F4'
      : !color
      ? props.primaryDark || '#000000'
      : '#4285F4',
    path_two: props.theme
      ? !color
        ? props.primaryDark || '#000000'
        : '#ffffff'
      : !color
      ? props.primaryWhite || '#ffffff'
      : '#ffffff',
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
        viewBox='0 0 256 231'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
      >
        <defs>
          <path
            className={props.transition}
            d='M252.925854,103.237077 L200.327344,11.759667 C196.302579,4.62225703 188.80054,0.148424726 180.607902,0 L75.3908814,0 C67.1970912,0.14438548 59.6931984,4.61932363 55.6714398,11.759667 L3.05292985,102.997083 C-1.01764328,110.080373 -1.01764328,118.793146 3.05292985,125.876436 L55.6514404,217.87383 C59.6319755,225.112707 67.1159052,229.735134 75.370882,230.053486 L180.587903,230.053486 C188.842442,229.770144 196.339809,225.166896 200.327344,217.933829 L252.925854,126.456419 C257.024715,119.259311 257.024715,110.434185 252.925854,103.237077 Z'
            id='path-1'
          ></path>
        </defs>
        <g>
          <g fillRule='nonzero'></g>
          <path
            className={props.transition}
            d='M252.925854,103.237077 L200.327344,11.759667 C196.302579,4.62225703 188.80054,0.148424726 180.607902,0 L75.3908814,0 C67.1970912,0.14438548 59.6931984,4.61932363 55.6714398,11.759667 L3.05292985,102.997083 C-1.01764328,110.080373 -1.01764328,118.793146 3.05292985,125.876436 L55.6514404,217.87383 C59.6319755,225.112707 67.1159052,229.735134 75.370882,230.053486 L180.587903,230.053486 C188.842442,229.770144 196.339809,225.166896 200.327344,217.933829 L252.925854,126.456419 C257.024715,119.259311 257.024715,110.434185 252.925854,103.237077 Z'
            fill={fill.path_one}
            fillRule='nonzero'
            mask='url(#mask-2)'
          ></path>
          <path
            className={props.transition}
            d='M187.167605,84.731603 L179.915711,92.6409485 L181.549379,139.638797 L174.676019,149.60019 L170.691462,145.615633 L174.357254,145.615633 L174.357254,129.318795 L156.765435,111.726976 L143.468746,118.373047 L99.3678929,74.1725271 L78.1302045,85.5484371 L75.500397,107.583037 L82.9515184,147.906753 L93.7496677,158.485752 L88.8287399,165.478649 L153.076098,231.236816 L179.915711,231.236816 C188.138614,230.95456 197.044276,225.565698 201.016528,218.360352 L244.795336,142.356934 L187.167605,84.731603 Z'
            fill='#000000'
            fillRule='nonzero'
            opacity='0.0700000003'
            mask='url(#mask-2)'
          ></path>
          <polygon
            className={props.transition}
            fill={fill.path_two}
            fillRule='nonzero'
            mask='url(#mask-2)'
            points='88.8287399 165.478649 99.3678929 154.939496 83.5691247 139.140728 83.5691247 89.9712953 99.3678929 74.1725271 88.8287399 63.6333741 67.730511 84.731603 67.730511 144.38042'
          ></polygon>
          <circle
            className={props.transition}
            fill={fill.path_two}
            fillRule='nonzero'
            mask='url(#mask-2)'
            cx='105.1455'
            cy='114.556012'
            r='7.47104423'
          ></circle>
          <circle
            className={props.transition}
            fill={fill.path_two}
            fillRule='nonzero'
            mask='url(#mask-2)'
            cx='127.498865'
            cy='114.556012'
            r='7.47104423'
          ></circle>
          <circle
            className={props.transition}
            fill={fill.path_two}
            fillRule='nonzero'
            mask='url(#mask-2)'
            cx='149.852229'
            cy='114.556012'
            r='7.47104423'
          ></circle>
          <polygon
            className={props.transition}
            fill={fill.path_two}
            fillRule='nonzero'
            mask='url(#mask-2)'
            points='166.069376 63.6333741 155.530223 74.1725271 171.328991 89.9712953 171.328991 139.140728 155.530223 154.939496 166.069376 165.478649 187.167605 144.38042 187.167605 84.731603'
          ></polygon>
        </g>
      </svg>
    </div>
  );
};

export default GoogleCloudFunction;
