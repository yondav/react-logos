import React, { useState } from 'react';

const Bridge = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#000B1D'
      : !color
      ? props.primaryDark || '#000000'
      : '#000B1D',
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
          d='M31.3758 36.0928L31.4356 36.0912C37.832 35.9272 42.9755 35.8451 46.8639 35.8451C50.683 35.8451 53.9581 36.2872 56.6721 37.1916C59.4154 38.0876 61.5113 39.3155 62.8805 40.92C64.2326 42.4423 65.1883 43.9923 65.7168 45.5719C66.2914 47.1272 66.5758 48.7908 66.5758 50.5568C66.5758 53.6889 65.7474 56.3154 64.0389 58.3774C62.7734 59.9048 61.2874 61.1039 59.5849 61.97C61.9852 62.8325 64.1101 64.1627 65.9531 65.9586C68.3057 68.1955 69.4448 71.2908 69.4448 75.1481C69.4448 80.604 67.3257 84.8672 63.0837 87.8481L63.0822 87.8492C58.9331 90.7479 53.1997 92.1549 45.9622 92.1549C42.0734 92.1549 37.2573 92.0728 31.5155 91.9087L31.468 91.9074L31.4212 91.8996C31.0939 91.845 30.7908 91.6777 30.5885 91.3743C30.4021 91.0947 30.3489 90.7703 30.3489 90.4766V37.5234C30.3489 37.2463 30.3899 36.9417 30.5388 36.6737C30.7049 36.3746 30.9785 36.1722 31.3172 36.1045L31.3758 36.0928ZM55.1198 69.3796L55.1112 69.3725C53.428 67.9863 50.8543 67.2358 47.2738 67.2358H41.4927V83.2816C42.5336 83.3516 44.181 83.3882 46.4541 83.3882C50.377 83.3882 53.1927 82.6525 55.0143 81.2925C56.7978 79.9611 57.7272 77.9556 57.7272 75.1481C57.7272 72.5989 56.8467 70.7118 55.1285 69.3863L55.1198 69.3796ZM46.4541 44.6118C44.0172 44.6118 42.3733 44.6278 41.4927 44.657V58.3051H46.8639C50.0135 58.3051 52.1528 57.634 53.4415 56.4408C54.7617 55.2183 55.432 53.6336 55.432 51.6224C55.432 49.2083 54.6822 47.5073 53.2757 46.3868C51.839 45.2423 49.6046 44.6118 46.4541 44.6118Z'
          fill={fill.path_two}
        />
        <path
          className={props.transition}
          d='M78.3308 50.9859C78.6008 50.6708 78.98 50.5999 79.268 50.5999H86.9733C87.312 50.5999 87.6463 50.6865 87.9352 50.8967C88.2183 51.1026 88.4049 51.3884 88.5226 51.6988C88.8635 52.5537 89.1026 53.6502 89.2517 54.9717C92.4046 51.5719 96.4136 49.8621 101.236 49.8621C101.535 49.8621 101.886 49.9372 102.158 50.209C102.43 50.4809 102.505 50.8322 102.505 51.1306V59.4096C102.505 59.7265 102.426 60.1213 102.104 60.4038C101.791 60.6773 101.403 60.7103 101.094 60.6758C96.4977 60.4158 92.9722 61.6066 90.4155 64.1633C90.077 64.5018 89.8812 64.9686 89.8812 65.6394V90.6406C89.8812 90.9648 89.7843 91.3275 89.48 91.5937C89.1935 91.8444 88.8353 91.909 88.5308 91.909H79.9238C79.5897 91.909 79.2093 91.8365 78.909 91.5696C78.5931 91.2888 78.4914 90.9068 78.4914 90.5586V62.8524C78.4914 58.4452 78.3555 54.8124 78.086 51.948C78.0488 51.6664 78.0682 51.2922 78.3308 50.9859Z'
          fill={fill.path_two}
        />
      </svg>
    </div>
  );
};

export default Bridge;
