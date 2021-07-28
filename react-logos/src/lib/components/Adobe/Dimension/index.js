import React, { useState } from 'react';

const Dimension = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#013301'
      : !color
      ? props.primaryDark || '#000000'
      : '#013301',
    path_two: props.theme
      ? !color
        ? props.primaryDark || '#000000'
        : '#33FF66'
      : !color
      ? props.primaryWhite || '#ffffff'
      : '#33FF66',
  };

  const handleMouseOver = () => {
    if (props.hover === 'colorize') {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const handleMouseLeave = () => {
    if (props.hover === 'colorize') {
      setColor(false);
    } else {
      setColor(true);
    }
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
        viewBox='0 0 128 128'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          className={props.transition}
          width='128'
          height='128'
          fill={fill.path_one}
        />
        <path
          className={props.transition}
          fillRule='evenodd'
          clipRule='evenodd'
          d='M21.9313 36.6835L21.9955 36.6814C25.3619 36.5746 30.8518 36.5214 38.456 36.5214C47.56 36.5214 54.6502 38.9906 59.5642 44.0711C64.4459 49.0649 66.855 55.5945 66.855 63.5646C66.855 67.6466 66.2562 71.3749 65.0433 74.7381L65.0416 74.7429C63.8373 78.0271 62.235 80.7513 60.2154 82.8848C58.2763 84.9888 55.9809 86.7289 53.3367 88.1061C50.7136 89.4723 48.0286 90.4596 45.2827 91.0637L45.2684 91.0669C42.5972 91.612 39.8474 91.8838 37.0204 91.8838C31.9121 91.8838 26.9098 91.8306 22.0134 91.7242C21.5777 91.7206 21.1437 91.5323 20.8663 91.1162C20.6321 90.7649 20.585 90.3597 20.585 90.0439V38.2816C20.585 37.9685 20.6511 37.5934 20.8971 37.2654C21.1563 36.9198 21.5201 36.752 21.8678 36.694L21.9313 36.6835ZM37.2597 82.4615C42.8181 82.4615 47.0114 80.923 49.9751 77.9611C52.9181 74.9673 54.4817 70.2878 54.4817 63.7241V63.7158C54.5337 57.635 53.1025 53.2395 50.3595 50.3495C47.6075 47.4501 43.6868 45.9438 38.456 45.9438C35.6807 45.9438 33.755 45.9748 32.6393 46.0314V82.3501C34.2176 82.4244 35.7577 82.4615 37.2597 82.4615Z'
          fill={fill.path_two}
        />
        <path
          className={props.transition}
          d='M82.1497 53.8568C82.0477 53.2582 81.92 52.7224 81.7638 52.2537L81.7276 52.145L81.6669 52.0479C81.262 51.4001 80.6351 50.9574 79.8138 50.9574H72.1571C71.8248 50.9574 71.2973 51.0368 70.9484 51.502C70.6357 51.9189 70.6592 52.3925 70.7261 52.7107C70.931 54.8932 71.035 57.7106 71.035 61.1718V90.0439C71.035 90.4054 71.1129 90.8564 71.4377 91.2218C71.7816 91.6087 72.2433 91.7243 72.6357 91.7243H81.4089C81.7705 91.7243 82.2214 91.6464 82.5868 91.3216C82.9738 90.9777 83.0893 90.516 83.0893 90.1236V62.901C84.9403 60.9353 87.1299 59.981 89.7037 59.981C91.6655 59.981 93.0071 60.5918 93.8998 61.6969C94.834 62.8536 95.3609 64.5267 95.3609 66.8346V90.0439C95.3609 90.4315 95.4585 90.8991 95.8223 91.2629C96.1861 91.6267 96.6537 91.7243 97.0413 91.7243H105.815C106.207 91.7243 106.669 91.6087 107.013 91.2218C107.337 90.8564 107.415 90.4054 107.415 90.0439V67.0739C107.415 61.2672 106.063 56.873 103.117 54.1626C100.28 51.5531 96.9103 50.2396 93.0535 50.2396C88.9253 50.2396 85.2795 51.4473 82.1497 53.8568Z'
          fill={fill.path_two}
        />
      </svg>
    </div>
  );
};

export default Dimension;
