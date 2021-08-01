import React, { useState } from 'react';

const Google_Voice = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? `${props.primaryWhite}c9` || '#ffffffc9'
        : '#4285F4'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#4285F4',
    path_two: props.theme
      ? !color
        ? `${props.primaryWhite}c9` || '#ffffffc9'
        : '#34A853'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#34A853',
    path_three: props.theme
      ? !color
        ? `${props.primaryWhite}e9` || '#ffffffe9'
        : '#FBBC05'
      : !color
      ? `${props.primaryDark}e9` || '#000000e9'
      : '#FBBC05',
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
        version='1.1'
        id='Content'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        className={props.transition}
        width={props.width || 128}
        height={props.height || 128}
        viewBox='0 0 152 176'
        enable-background='new 0 0 152 176'
      >
        <metadata>
          <sfw xmlns='&ns_sfw;'>
            <slices></slices>
            <sliceSourceBounds
              bottomLeftOrigin='true'
              height='176'
              width='172.785'
              x='20'
              y='8'
            ></sliceSourceBounds>
          </sfw>
        </metadata>
        <filter
          height='192'
          id='material-drop-shadow'
          width='192'
          x='-24'
          y='-24'
        >
          <feGaussianBlur
            in='SourceGraphic'
            result='blur'
            stdDeviation='4'
          ></feGaussianBlur>
          <feOffset
            dx='4'
            dy='4'
            in='blur'
            result='offsetBlurredGraphic'
          ></feOffset>
        </filter>
        <path
          fill='#00897B'
          d='M152,76c0-41.974-34.026-76-76-76S0,34.026,0,76c0,39.8,36.3,72,76,72v28C122.2,152.6,152,114.9,152,76z'
        />
        <path
          opacity='0.2'
          fill='#263238'
          enable-background='new    '
          d='M76,147c-39.6,0-75.7-32-76-71.5V76c0,39.8,36.3,72,76,72V147z'
        />
        <path
          opacity='0.2'
          fill='#263238'
          enable-background='new    '
          d='M76,175v1c46.2-23.4,76-61.1,76-100v-0.5
	C151.7,114.2,122,151.7,76,175z'
        />
        <path
          opacity='0.2'
          fill='#FFFFFF'
          enable-background='new    '
          d='M76,1c41.767,0.029,75.696,33.734,76,75.5V76
	c0-41.974-34.026-76-76-76S0,34.026,0,76v0.5C0.304,34.734,34.233,1.029,76,1z'
        />
        <g opacity='0.2' filter='url(#material-drop-shadow)'>
          <path
            fill='#263238'
            d='M115.12,89.36c-5.335-0.722-10.756-1.6-16.38-2.697c-1.629-0.577-3.443-0.02-4.468,1.371l-8.089,8.09
		c-12.018-6.305-21.852-16.091-28.216-28.077l8.296-8.297c1.061-0.82,1.564-2.171,1.299-3.485
		c-1.397-7.349-2.229-12.007-2.919-17.38c0.058-1.546-1.148-2.846-2.693-2.904c-0.151-0.006-0.302,0.001-0.452,0.02H41.351
		c-1.833,0.031-3.316,1.502-3.363,3.335c0.076,9.907,1.998,19.713,5.667,28.916c1.33,3.259,2.877,6.424,4.632,9.475
		c6.794,11.659,16.511,21.345,28.192,28.101c11.565,6.646,24.673,10.14,38.012,10.131c1.817,0.116,3.385-1.262,3.501-3.08
		c0.005-0.077,0.007-0.155,0.007-0.232V92.152C118,90.774,117.143,89.634,115.12,89.36z'
          />
        </g>
        <path
          opacity='0.2'
          fill='#263238'
          enable-background='new    '
          d='M114.492,115.958c-13.339,0.009-26.447-3.484-38.012-10.13
	c-11.681-6.756-21.398-16.442-28.192-28.101c-1.755-3.051-3.303-6.217-4.632-9.475c-3.564-8.953-5.477-18.477-5.646-28.112
	c-0.004,0.066-0.021,0.13-0.021,0.196c0.076,9.907,1.998,19.713,5.667,28.916c1.33,3.259,2.877,6.425,4.632,9.475
	c6.794,11.659,16.511,21.345,28.192,28.101c11.565,6.646,24.673,10.139,38.012,10.13c1.817,0.116,3.385-1.262,3.501-3.08
	c0.005-0.077,0.007-0.155,0.007-0.232v-1c0.012,1.821-1.455,3.307-3.276,3.318C114.647,115.965,114.569,115.963,114.492,115.958z'
        />
        <linearGradient
          id='SVGID_1_'
          gradientUnits='userSpaceOnUse'
          x1='12720.7871'
          y1='-5090.9917'
          x2='13526.8613'
          y2='-5897.0645'
          gradientTransform='matrix(0.125 0 0 -0.125 -1539.125 -582.375)'
        >
          {/* THESE LINES CAUSING ERRORS DUE TO STYLE FORMAT */}
          {/* <stop offset='0' style='stop-color:#263238;stop-opacity:0.2' />
          <stop offset='1' style='stop-color:#263238;stop-opacity:0.02' /> */}
        </linearGradient>
        <path
          className={props.transition}
          fill='url(#SVGID_1_)'
          d='M63.882,36.869l-10,10l6.522,46.599l55.396,55.235c11.142-10.303,20.055-21.675,26.24-33.666
	L63.882,36.869z'
        />
        <path
          className={props.transition}
          fill='#E0E0E0'
          d='M57.966,68.045l-9.678,9.681c6.794,11.659,16.511,21.345,28.192,28.101l9.703-9.704
	C74.164,89.819,64.33,80.032,57.966,68.045z'
        />
        <path
          className={props.transition}
          opacity='0.1'
          fill='#191919'
          enable-background='new    '
          d='M58.32,68.694c-0.116-0.215-0.241-0.433-0.353-0.647l-9.679,9.68
	c0.119,0.208,0.25,0.419,0.373,0.627L58.32,68.694z'
        />
        <path
          className={props.transition}
          opacity='0.4'
          fill='#FFFFFF'
          enable-background='new    '
          d='M57.966,69.045c6.25,11.762,15.844,21.409,27.572,27.723
	l0.644-0.644C74.164,89.819,64.33,80.032,57.966,68.045c0,0.005-0.38,0.297-0.38,0.297S57.966,69.034,57.966,69.045z'
        />
        <path
          className={props.transition}
          fill='#F5F5F5'
          d='M115.12,89.36c-5.335-0.722-10.756-1.6-16.38-2.697c-1.629-0.577-3.443-0.02-4.468,1.371L76.48,105.828
	c11.565,6.646,24.673,10.139,38.012,10.13c1.817,0.116,3.385-1.262,3.501-3.08c0.005-0.077,0.007-0.155,0.007-0.232V92.152
	C118,90.774,117.143,89.634,115.12,89.36z'
        />
        <path
          className={props.transition}
          opacity='0.4'
          fill='#FFFFFF'
          enable-background='new    '
          d='M115.12,89.36c-5.335-0.722-10.756-1.6-16.38-2.697
	c-1.629-0.577-3.443-0.02-4.468,1.371L76.48,105.828c0.212,0.123,0.429,0.237,0.643,0.357l17.149-17.151
	c1.025-1.391,2.839-1.948,4.468-1.371c5.624,1.098,11.045,1.975,16.38,2.697c2.023,0.274,2.88,1.414,2.88,2.792v-1
	C118,90.774,117.143,89.634,115.12,89.36z'
        />
        <path
          className={props.transition}
          opacity='0.2'
          fill='#263238'
          enable-background='new    '
          d='M57.967,68.046c0.112,0.215,0.237,0.432,0.353,0.647l7.943-7.944
	c0.991-0.771,1.498-2.01,1.331-3.254c-0.165,0.884-0.636,1.682-1.331,2.253L57.967,68.046z'
        />
        <path
          className={props.transition}
          fill='#F5F5F5'
          d='M48.288,77.726l17.975-17.977c1.061-0.82,1.564-2.171,1.299-3.485c-1.397-7.349-2.229-12.007-2.919-17.38
	c0.058-1.546-1.148-2.846-2.693-2.904c-0.151-0.006-0.302,0.001-0.452,0.02H41.351c-1.833,0.031-3.316,1.502-3.363,3.335
	c0.076,9.907,1.998,19.713,5.667,28.916C44.985,71.51,46.533,74.676,48.288,77.726z'
        />
        <path
          className={props.transition}
          opacity='0.4'
          fill='#FFFFFF'
          enable-background='new    '
          d='M41.351,37h20.146c1.535-0.191,2.934,0.898,3.126,2.433
	c0.019,0.15,0.025,0.301,0.02,0.452c0.69,5.372,1.523,10.03,2.919,17.38c0.014,0.076,0.022,0.154,0.033,0.231
	c0.06-0.409,0.049-0.826-0.033-1.231c-1.397-7.349-2.229-12.007-2.919-17.38c0.058-1.546-1.148-2.846-2.693-2.904
	c-0.151-0.006-0.302,0.001-0.452,0.02H41.351c-1.833,0.031-3.316,1.502-3.363,3.335c0,0.263,0.018,0.539,0.021,0.804
	C38.152,38.39,39.597,37.034,41.351,37z'
        />
        <radialGradient
          id='SVGID_2_'
          cx='12489'
          cy='-4835'
          r='1237.8192'
          gradientTransform='matrix(0.125 0 0 -0.125 -1539.125 -582.375)'
          gradientUnits='userSpaceOnUse'
        >
          {/* THESE LINES CAUSING ERRORS DUE TO STYLE FORMAT */}
          {/* <stop offset='0' style='stop-color:#FFFFFF;stop-opacity:0.1' />
          <stop offset='1' style='stop-color:#FFFFFF;stop-opacity:0' /> */}
        </radialGradient>
        <path
          fill='url(#SVGID_2_)'
          d='M152,76c0-41.974-34.026-76-76-76S0,34.026,0,76c0,39.8,36.3,72,76,72v28
	C122.2,152.6,152,114.9,152,76z'
        />
      </svg>
    </div>
  );
};

export default Google_Voice;
