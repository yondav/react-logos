import React, { useState } from 'react';

const GoogleHome = (props) => {
  const [color, setColor] = useState(props.color);

  const fill = {
    path_one: props.theme
      ? !color
        ? `${props.primaryWhite}c9` || '#ffffffc9'
        : '#3BAB59'
      : !color
      ? `${props.primaryDark}c9` || '#000000c9'
      : '#3BAB59',
    path_two: props.theme
      ? !color
        ? props.primaryWhite || '#ffffff'
        : '#4586F7'
      : !color
      ? props.primaryDark || '#000000'
      : '#4586F7',
    path_three: props.theme
      ? !color
        ? `${props.primaryWhite}b9` || '#ffffffb9'
        : '#FDC00D'
      : !color
      ? `${props.primaryDark}b9` || '#000000b9'
      : '#FDC00D',
    path_four: props.theme
      ? !color
        ? `${props.primaryWhite}e9` || '#ffffffe9'
        : '#EC5043'
      : !color
      ? `${props.primaryDark}e9` || '#000000e9'
      : '#EC5043',
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
        viewBox='0 0 256 265'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
      >
        <g>
          <path
            className={props.transition}
            d='M199.061185,207.634845 C199.085502,217.03865 202.381002,226.654917 202.377398,236.058845 C202.373721,245.604163 199.070969,254.937147 199.100185,264.482845 C151.689185,264.475845 104.277185,264.482845 56.8671849,264.478845 C56.8899646,255.095091 52.4489679,245.441856 52.4451431,236.058845 C52.4415107,226.494356 56.8750029,217.200091 56.8941849,207.634845 C104.284185,207.649845 151.671185,207.638845 199.061185,207.634845 Z'
            fill={fill.path_one}
          ></path>
          <path
            className={props.transition}
            d='M144.20343,50.8391621 C150.788967,44.2673942 161.302534,40.8049071 167.812585,34.1582447 C194.787585,61.2992447 221.876585,88.3342447 248.915585,115.419245 C251.351585,117.927245 254.321585,120.235245 255.272585,123.774245 C256.201585,126.077245 255.917585,128.586245 255.959585,131.007245 C255.963585,170.664245 255.955585,210.317245 255.965585,249.970245 C256.564585,257.795245 249.104585,265.104245 241.313585,264.482245 C227.241585,264.482245 213.172585,264.486245 199.099585,264.482245 C199.042585,245.533245 199.110585,226.584245 199.061585,207.635245 C199.095585,186.802245 199.076585,165.973245 199.069585,145.144245 C181.506585,127.609245 163.981585,110.034245 146.430585,92.4912447 C140.307585,86.3152447 134.089585,80.2292447 128.023585,74.0002447 C131.349585,70.8172447 140.762034,54.2733623 144.20343,50.8391621 Z'
            fill={fill.path_two}
          ></path>
          <path
            className={props.transition}
            d='M56.8487849,145.220645 C56.9277849,166.022645 56.8407849,186.829645 56.8937849,207.634645 C56.8557849,226.583645 56.9127849,245.529645 56.8677849,264.478645 C42.0597849,264.471645 27.2517849,264.482645 12.4437849,264.471645 C6.25978491,263.694645 0.814784906,258.488645 0.0267849064,252.254645 C-0.0222150936,235.534645 0.0117849064,218.812645 0.0157849064,202.094645 C9.88278491,192.319645 16.0386327,179.624241 25.8716327,169.814241 C34.9806327,160.667241 47.7817849,154.409645 56.8487849,145.220645 Z'
            fill={fill.path_three}
          ></path>
          <path
            className={props.transition}
            d='M127.246385,0.0255447371 C128.470385,0.177544737 129.925385,-0.304455263 131.013385,0.381544737 C133.968385,0.957544737 136.559385,2.66654474 138.637385,4.79954474 C147.465385,13.6475447 156.301385,22.4875447 165.138385,31.3275447 C166.024385,32.2745447 167.058385,33.0895447 167.812385,34.1575447 C157.900385,44.2785447 147.802385,54.2135447 137.818385,64.2625447 C134.544385,67.4985447 131.349385,70.8175447 128.023385,74.0005447 C123.635385,78.1345447 119.482385,82.5105447 115.185385,86.7395447 C95.7473849,106.241545 76.2413849,125.672545 56.8483849,145.220545 C47.7813849,154.409545 38.6043849,163.495545 29.4943849,172.642545 C19.6623849,182.452545 9.88238491,192.319545 0.0153849064,202.094545 C-0.0186150936,180.660545 0.0153849064,159.224545 0.00838490642,137.793545 C0.0313849064,133.747545 -0.0566150936,129.700545 0.0833849064,125.657545 C0.0423849064,124.838545 0.659384906,124.190545 0.621384906,123.372545 C1.19438491,122.410545 1.70538491,121.409545 2.26238491,120.439545 C3.66438491,118.575545 5.40738491,117.014545 7.03338491,115.351545 C43.8143849,78.4945447 80.6063849,41.6455447 117.398385,4.79554474 C118.903385,3.21554474 120.626385,1.77954474 122.722385,1.06354474 C124.192385,0.571544737 125.647385,-0.144455263 127.246385,0.0255447371 Z'
            fill={fill.path_four}
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default GoogleHome;
