import React, { useState } from 'react';

const CreativeCloud = (props) => {
  const [color, setColor] = useState(false);

  const fill = {
    ellipse_one: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#fb1da7'
      : !color
      ? props.primaryDark || '#000000'
      : '#fb1da7',
    ellipse_two: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#fb1da7'
      : !color
      ? props.primaryDark || '#000000'
      : '#fb1da7',
    ellipse_three: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#e70800'
      : !color
      ? props.primaryDark || '#000000'
      : '#e70800',
    ellipse_four: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#fc4900'
      : !color
      ? props.primaryDark || '#000000'
      : '#fc4900',
    ellipse_five: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#55df4d'
      : !color
      ? props.primaryDark || '#000000'
      : '#55df4d',
    ellipse_six: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#2985ff'
      : !color
      ? props.primaryDark || '#000000'
      : '#2985ff',
    ellipse_seven: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#ffd800'
      : !color
      ? props.primaryDark || '#000000'
      : '#ffd800',
    path_two: props.theme
      ? !color
        ? props.primaryDark || '#000000'
        : '#ffffff'
      : !color
      ? props.primaryWhite || '#ffffff'
      : '#f4f4f4',
  };

  const handleMouseEnter = () => {
    setColor(true);
  };

  const handleMouseLeave = () => {
    setColor(false);
  };

  return (
    <div
      className='react-logos-wrapper'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        className={props.transition}
        width={props.width || 128}
        height={props.height || 128}
        viewBox='0 0 128 128'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0)'>
          <g filter='url(#filter0_f)'>
            <ellipse
              className={props.transition}
              cx='14.2044'
              cy='42.6382'
              rx='51.423'
              ry='28.2687'
              transform='rotate(28.2623 14.2044 42.6382)'
              fill={fill.ellipse_one}
            />
            <ellipse
              className={props.transition}
              cx='15.4291'
              cy='46.4374'
              rx='54.3006'
              ry='35.2804'
              transform='rotate(28.2623 15.4291 46.4374)'
              fill={fill.ellipse_two}
            />
            <ellipse
              className={props.transition}
              cx='54.7701'
              cy='9.46785'
              rx='48.6965'
              ry='32.3897'
              transform='rotate(37.9878 54.7701 9.46785)'
              fill={fill.ellipse_three}
            />
            <ellipse
              className={props.transition}
              cx='110.607'
              cy='9.90752'
              rx='41.7461'
              ry='40.2228'
              transform='rotate(28.2623 110.607 9.90752)'
              fill={fill.ellipse_four}
            />
            <ellipse
              className={props.transition}
              cx='106.549'
              cy='115.479'
              rx='59.6799'
              ry='50.2597'
              transform='rotate(28.2623 106.549 115.479)'
              fill={fill.ellipse_five}
            />
            <ellipse
              className={props.transition}
              cx='17.1959'
              cy='119.282'
              rx='47.6817'
              ry='52.3785'
              transform='rotate(28.2623 17.1959 119.282)'
              fill={fill.ellipse_six}
            />
            <ellipse
              className={props.transition}
              cx='103.776'
              cy='73.8924'
              rx='52.1218'
              ry='30.5907'
              transform='rotate(10.6539 103.776 73.8924)'
              fill={fill.ellipse_seven}
            />
          </g>
          <path
            className={props.transition}
            d='M101.846 38.8776C98.3353 35.3161 94.1351 32.5079 89.5023 30.6246C84.8695 28.7413 79.9013 27.8225 74.9014 27.9243C70.2376 27.8741 65.613 28.7803 61.3131 30.587C57.0132 32.3936 53.1292 35.0624 49.9009 38.4287C45.6021 37.9417 41.2489 38.3683 37.1264 39.6807C33.004 40.9931 29.2052 43.1615 25.9791 46.0441C22.753 48.9266 20.1722 52.4582 18.4058 56.4075C16.6395 60.3568 15.7274 64.6347 15.7293 68.9611C15.793 76.9396 18.8688 84.5995 24.3406 90.4065C27.1657 93.4341 30.5858 95.8455 34.3865 97.4894C38.1873 99.1334 42.2866 99.9744 46.4276 99.9599H75.6987C85.2884 99.9118 94.4675 96.0617 101.222 89.2544C107.977 82.447 111.755 73.2383 111.729 63.6485C111.647 54.4465 108.121 45.609 101.846 38.8776ZM45.8811 94.3573C42.5885 94.3682 39.3272 93.7195 36.2894 92.4495C33.2517 91.1795 30.499 89.314 28.1939 86.963C25.8889 84.6119 24.078 81.823 22.8682 78.7608C21.6584 75.6986 21.0742 72.425 21.1501 69.1334C21.1501 55.1411 31.6496 43.5597 45.6091 43.5597C51.9238 43.626 57.9958 46.0021 62.6784 50.2393L62.8031 50.347L73.3504 61.17C74.1832 62.0344 74.6395 63.1936 74.6193 64.3937C74.599 65.5939 74.104 66.7371 73.2425 67.5729C72.381 68.4087 71.2234 68.869 70.0232 68.853C68.823 68.8369 67.6781 68.3458 66.8393 67.4873L56.3732 56.7469C53.4241 54.2104 49.6631 52.8156 45.7733 52.8158C43.6725 52.8333 41.5963 53.2703 39.6667 54.1009C37.737 54.9316 35.9926 56.1392 34.5359 57.653C33.0792 59.1668 31.9394 60.9562 31.1835 62.9164C30.4276 64.8766 30.0707 66.9679 30.1338 69.0678C30.1054 71.1955 30.4967 73.3079 31.2853 75.2843C32.0738 77.2606 33.2442 79.0621 34.7295 80.5859C36.2147 82.1096 37.9858 83.3256 39.9413 84.1644C41.8969 85.0032 43.9986 85.4484 46.1263 85.4744L48.2154 85.4839L48.2348 85.5427C51.2258 89.6694 59.5578 94.3573 59.5578 94.3573L45.8811 94.3573ZM98.0325 85.565C95.1291 88.4669 91.6723 90.756 87.8673 92.2964C84.0623 93.8368 79.9866 94.5971 75.8822 94.5322C71.862 94.5012 67.8881 93.6708 64.1918 92.0894C60.4956 90.508 57.1508 88.2072 54.3522 85.3208L40.4121 71.3511C39.7866 70.7113 39.3638 69.9012 39.1968 69.0222C39.0297 68.1432 39.1259 67.2344 39.4731 66.4098C39.8203 65.5852 40.4032 64.8814 41.1488 64.3867C41.8943 63.8919 42.7692 63.6283 43.6639 63.6287C44.2701 63.6256 44.8707 63.7452 45.4294 63.9802C45.9882 64.2153 46.4937 64.5609 46.9154 64.9963L60.7576 78.8771C64.8188 83.0908 70.3811 85.5282 76.2318 85.6579C79.0924 85.6794 81.9272 85.1162 84.5623 84.0028C87.1974 82.8895 89.5772 81.2495 91.5558 79.1835C95.4287 74.9019 97.4479 69.2606 97.1717 63.494C97.2515 60.6769 96.7679 57.8722 95.7492 55.2445C94.7305 52.6168 93.1973 50.2191 91.2394 48.1919C89.2816 46.1648 86.9385 44.5491 84.3479 43.4397C81.7572 42.3303 78.971 41.7495 76.1528 41.7313C71.8562 41.5401 67.617 42.7762 64.0964 45.2467C64.0564 45.2143 63.0554 44.5507 61.9248 43.8638C61.2236 43.4374 60.4684 43.0134 59.8741 42.6909C59.213 42.3315 57.3176 41.4016 56.19 40.9355C55.9094 40.8194 55.5471 40.6864 55.3945 40.6325L55.4262 40.6153C61.1638 35.2519 67.8884 33.4421 75.7374 33.4421C79.7139 33.3509 83.6683 34.0589 87.3661 35.5243C91.0639 36.9896 94.4299 39.1824 97.2646 41.9728C100.099 44.7631 102.345 48.0941 103.868 51.7684C105.392 55.4426 106.162 59.3854 106.133 63.3628C106.462 71.5416 103.551 79.5198 98.0325 85.565Z'
            fill={fill.path_two}
          />
        </g>
        <defs>
          <filter
            id='filter0_f'
            x='-80.5789'
            y='-76.0024'
            width='290.177'
            height='291.992'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='22.6667'
              result='effect1_foregroundBlur'
            />
          </filter>
          <clipPath id='clip0'>
            <path
              className={props.transition}
              d='M0 20C0 8.95431 8.95431 0 20 0H108C119.046 0 128 8.95431 128 20V108C128 119.046 119.046 128 108 128H20C8.95431 128 0 119.046 0 108V20Z'
              fill='#f4f4f4'
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default CreativeCloud;
