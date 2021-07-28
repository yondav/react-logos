import React, { useContext, useEffect } from 'react';
import './App.css';
import { ThemeContext } from './context/ThemeContext';
import Adobe from './Components/Adobe';

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
      <Adobe darkMode={darkMode} />
    </div>
  );
}

export default App;
