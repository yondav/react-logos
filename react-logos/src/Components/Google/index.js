import React from 'react';
import * as All from '../../lib/components/Google';

const Google = ({ darkMode }) => {
  return (
    <fieldset>
      <legend>Google</legend>
      <div className='icon-group'>
        <All.Android
          width='3rem'
          height='3rem'
          color={false}
          theme={darkMode}
          primaryDark='#343434'
          primaryWhite='#f4f4f4'
          hover={'colorize'}
          transition='ease-in'
        />
        <All.AndroidAlt2
          width='3rem'
          height='3rem'
          color={false}
          theme={darkMode}
          primaryDark='#343434'
          primaryWhite='#f4f4f4'
          hover={'colorize'}
          transition='ease-in'
        />
        <All.AndroidAlt
          width='3rem'
          height='3rem'
          color={false}
          theme={darkMode}
          primaryDark='#343434'
          primaryWhite='#f4f4f4'
          hover={'colorize'}
          transition='ease-in'
        />
      </div>
    </fieldset>
  );
};

export default Google;
