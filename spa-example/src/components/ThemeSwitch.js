import React, { useContext } from 'react';
import './ThemeSwitch.scss'
import ContextStore from 'store';

function ThemeSwitch() {
  const { darkTheme, setDarkTheme } = useContext(ContextStore)

  return (
    <label className="switch">
      <input type="checkbox" checked={darkTheme} onChange={e => {setDarkTheme(e.target.checked)}}/>
      <span className="slider"></span>
    </label>
  );
}

export default ThemeSwitch;
