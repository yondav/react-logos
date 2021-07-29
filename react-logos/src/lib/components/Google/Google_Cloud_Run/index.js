import React, { useState } from 'react';

const GoogleCloudRun = (props) => {
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
        <g>
          <path
            className={props.transition}
            d='M75.390147,0 C67.1964365,0.144249443 59.6926147,4.61940312 55.670735,11.7594655 L55.670735,11.7594655 L3.05275724,102.995813 C-1.01758575,110.07943 -1.01758575,118.791982 3.05275724,125.875029 L3.05275724,125.875029 L55.6507795,217.871964 C59.631608,225.111234 67.1149042,229.733488 75.3696214,230.052205 L75.3696214,230.052205 L180.586192,230.052205 C188.840909,229.768267 196.337889,225.164829 200.325559,217.932401 L200.325559,217.932401 L252.923581,126.455448 C254.973292,122.857194 255.997862,118.851278 255.997862,114.845933 L255.997862,114.845933 C255.997862,110.840588 254.973292,106.834673 252.923581,103.235849 L252.923581,103.235849 L200.325559,11.7594655 C196.300829,4.6222539 188.799287,0.148240535 180.606147,0 L180.606147,0 L75.390147,0 Z'
            fill={fill.path_one}
          ></path>
          <path
            className={props.transition}
            d='M236.495178,155.027249 L200.325559,217.932401 C196.337889,225.164829 188.840909,229.768267 180.586192,230.052205 L140.510158,230.052205 L82.0381078,171.057147 L99.2756312,115.473789 L82.0381078,59.2541363 L99.743159,71.1470183 L123.548878,95.1659759 L112.429128,59.2541363 L195.804166,115.261691 L236.495178,155.027249 Z'
            fill-opacity='0.07'
            fill='#000000'
            fill-rule='nonzero'
          ></path>
          <path
            className={props.transition}
            d='M82.0382788,59.2539082 L99.7433301,71.1473604 L113.622065,115.765481 L99.9902076,159.043164 L82.0382788,171.05749 L99.3807109,115.261463 L82.0382788,59.2539082 Z M127.385457,79.0899171 L135.977707,106.881596 L168.966927,106.881596 L127.385457,79.0899171 Z M195.804166,115.261748 L112.429128,171.057204 L129.77156,115.261748 L112.429128,59.2536232 L195.804166,115.261748 Z'
            fill={fill.path_two}
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default GoogleCloudRun;