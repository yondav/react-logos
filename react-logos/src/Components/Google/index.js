import React from 'react';
import * as All from '../../lib/components/Google';

const Google = ({ darkMode }) => {
  return (
    <fieldset>
      <legend>Google</legend>
      <div className='icon-group'>
        {Object.values(All).map((logo, index) =>
          React.createElement(logo, {
            key: index,
            width: '3rem',
            height: '3rem',
            color: false,
            theme: darkMode,
            primaryDark: '#343434',
            primaryWhite: '#f4f4f4',
            hover: 'colorize',
            transition: 'ease-in',
          })
        )}
      </div>
    </fieldset>
  );
};

export default Google;
