import React, { useContext, useEffect } from 'react';
import './App.css';
import { ThemeContext } from './context/ThemeContext';
import {
  AcrobatDC,
  AcrobatOnline,
  AfterEffects,
  Animate,
  Audition,
  Behance,
  Bridge,
  CharacterAnimator,
  CreativeCloud,
  CreativeCloudAlt,
  Dimension,
  DocumentCloud,
  Dreamweaver,
  ExperienceCloud,
} from './lib/components';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  useEffect(
    () =>
      darkMode
        ? (document.querySelector('body').classList = 'dark')
        : (document.querySelector('body').classList = ''),
    [darkMode]
  );

  const handleTheme = () =>
    darkMode
      ? theme.dispatch({ type: 'LIGHTMODE' })
      : theme.dispatch({ type: 'DARKMODE' });

  return (
    <div className='App'>
      <button onClick={handleTheme}>toggle theme</button>
      <AcrobatDC
        color={false}
        theme={darkMode}
        primaryDark='#343434'
        primaryWhite='#f4f4f4'
        hover={'colorize'}
        transition='ease'
      />
      <AcrobatOnline
        color={true}
        theme={darkMode}
        primaryDark='#343434'
        primaryWhite='#f4f4f4'
        hover={'decolorize'}
        transition='ease-in'
      />
      <AfterEffects
        color={false}
        theme={darkMode}
        primaryDark='#343434'
        primaryWhite='#f4f4f4'
        hover={'colorize'}
        transition='ease-in'
      />
      <Animate
        color={false}
        theme={darkMode}
        primaryDark='#343434'
        primaryWhite='#f4f4f4'
        hover={'colorize'}
        transition='ease-in'
      />
      <Audition
        color={false}
        theme={darkMode}
        primaryDark='#343434'
        primaryWhite='#f4f4f4'
        hover={'colorize'}
        transition='ease-in'
      />
      <Behance
        color={false}
        theme={darkMode}
        primaryDark='#343434'
        primaryWhite='#f4f4f4'
        hover={'colorize'}
        transition='ease-in'
      />
      <Bridge
        color={false}
        theme={darkMode}
        primaryDark='#343434'
        primaryWhite='#f4f4f4'
        hover={'colorize'}
        transition='ease-in'
      />
      <CharacterAnimator
        color={false}
        theme={darkMode}
        primaryDark='#343434'
        primaryWhite='#f4f4f4'
        hover={'colorize'}
        transition='ease-in'
      />
      <CreativeCloud
        color={false}
        theme={darkMode}
        primaryDark='#343434'
        primaryWhite='#f4f4f4'
        hover={'colorize'}
        transition='ease-in'
      />
      <CreativeCloudAlt
        color={false}
        theme={darkMode}
        primaryDark='#343434'
        primaryWhite='#f4f4f4'
        hover={'colorize'}
        transition='ease-in'
      />
      <Dimension
        color={false}
        theme={darkMode}
        primaryDark='#343434'
        primaryWhite='#f4f4f4'
        hover={'colorize'}
        transition='ease-in'
      />
      <DocumentCloud
        color={false}
        theme={darkMode}
        primaryDark='#343434'
        primaryWhite='#f4f4f4'
        hover={'colorize'}
        transition='ease-in'
      />
      <Dreamweaver
        color={false}
        theme={darkMode}
        primaryDark='#343434'
        primaryWhite='#f4f4f4'
        hover={'colorize'}
        transition='ease-in'
      />
      <ExperienceCloud
        color={false}
        theme={darkMode}
        primaryDark='#343434'
        primaryWhite='#f4f4f4'
        hover={'colorize'}
        transition='ease-in'
      />
    </div>
  );
}

export default App;
