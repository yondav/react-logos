import React, { useState } from 'react';

const XD = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#470137'
      : !color
      ? props.primaryDark || '#000000'
      : '#470137',
    path_two: props.theme
      ? !color
        ? props.primaryDark || '#000000'
        : '#FF61F6'
      : !color
      ? props.primaryWhite || '#ffffff'
      : '#FF61F6',
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
          d='M67.8587 37.9836L52.1288 63.3018L68.9591 90.7111C69.0664 90.9043 69.0967 91.1309 69.0439 91.3456C68.9859 91.5437 68.7895 91.6709 68.4513 91.7261H56.4424C56.0973 91.761 55.7493 91.7006 55.4363 91.5514C55.1232 91.4023 54.857 91.1701 54.6667 90.8802C53.5373 88.6815 52.41 86.6584 51.2828 84.487C50.1555 82.3174 48.9576 80.1044 47.689 77.8481C46.4212 75.5942 45.1667 73.3109 43.9256 70.9982H43.8408C42.7125 73.2538 41.5428 75.509 40.3319 77.7639C39.1176 80.0195 37.9193 82.2605 36.737 84.4871C35.5529 86.7153 34.3408 88.7663 33.0997 90.965C33.0081 91.2005 32.8443 91.4009 32.6318 91.5376C32.4193 91.6743 32.169 91.7403 31.9167 91.7261H20.3297C20.2821 91.731 20.234 91.7259 20.1885 91.7112C20.143 91.6965 20.1011 91.6724 20.0654 91.6406C20.0297 91.6088 20.001 91.5699 19.9812 91.5264C19.9614 91.4828 19.9508 91.4357 19.9502 91.3878C19.9173 91.1817 19.9622 90.9707 20.0764 90.7958L36.3989 64.1478L20.4992 37.8988C20.3296 37.6744 20.3028 37.4908 20.4144 37.3491C20.4769 37.277 20.5553 37.2203 20.6434 37.1836C20.7316 37.1469 20.827 37.1312 20.9222 37.1376H32.8474C33.1074 37.1234 33.3673 37.1669 33.6086 37.2648C33.8103 37.3796 33.9835 37.5385 34.1153 37.7297C35.1309 39.9853 36.2581 41.5965 37.4981 43.8504C38.7381 46.1065 39.9926 48.3336 41.2615 50.5317C42.5305 52.7304 43.7005 54.9575 44.7716 57.2131H44.8564C45.9836 54.9017 47.125 52.6465 48.2804 50.4474C49.4367 48.2482 50.6208 46.0352 51.8329 43.8085C53.0449 41.5819 54.2135 40.0131 55.3429 37.8144C55.4072 37.6055 55.5236 37.4163 55.6812 37.2648C55.8899 37.1586 56.1246 37.1144 56.3575 37.1375H67.4368C67.5436 37.1113 67.6561 37.1223 67.7559 37.1685C67.8556 37.2147 67.9367 37.2935 67.9858 37.3919C68.0349 37.4903 68.049 37.6025 68.0259 37.71C68.0028 37.8175 67.9438 37.914 67.8587 37.9836Z'
          fill={fill.path_two}
        />
        <path
          className={props.transition}
          d='M91.2738 93.5176C87.3812 93.5768 83.5243 92.7678 79.9836 91.1493C76.6848 89.6226 73.9271 87.1307 72.075 84.0031C70.0407 80.3519 69.0463 76.2128 69.2 72.036C69.1681 68.1546 70.1598 64.3334 72.075 60.9573C74.0484 57.5186 76.95 54.705 80.4478 52.8385C84.5412 50.7066 89.1124 49.6585 93.7257 49.7939C94.0081 49.7939 94.3745 49.808 94.8251 49.8363C95.276 49.8653 96.2362 49.9077 96.8568 49.963V35.0005C96.808 34.6452 96.9014 34.2851 97.1164 33.9982C97.3315 33.7114 97.6511 33.5209 98.0057 33.4681H106.191C106.596 33.4693 106.984 33.6307 107.271 33.9172C107.557 34.2037 107.719 34.5919 107.72 34.997V83.1995C107.72 84.1588 107.762 85.2019 107.846 86.329C107.931 87.4573 108.002 88.472 108.058 89.373C108.069 89.5486 108.026 89.7233 107.935 89.8742C107.845 90.0251 107.711 90.1453 107.552 90.219C104.933 91.3627 102.197 92.2136 99.3921 92.7564C96.714 93.2506 93.9971 93.5053 91.2738 93.5176ZM96.6601 83.0304V59.9422C96.1257 59.8202 95.5835 59.7355 95.0373 59.6889C94.461 59.6307 93.8821 59.6024 93.3029 59.6041C91.2508 59.5837 89.2227 60.0472 87.3832 60.9572C85.4125 61.8968 83.77 63.4073 82.6689 65.2925C81.5679 67.1778 81.0592 69.3506 81.2091 71.5286C81.1683 73.3722 81.4695 75.2073 82.0975 76.941C82.6084 78.3383 83.4164 79.6081 84.4658 80.6626C85.4699 81.6327 86.6857 82.3563 88.0172 82.7764C89.4236 83.232 90.8937 83.4605 92.3721 83.4533C93.1622 83.4533 93.8955 83.425 94.5719 83.3685C95.2769 83.3204 95.9759 83.2072 96.6601 83.0304Z'
          fill={fill.path_two}
        />
      </svg>
    </div>
  );
};

export default XD;
