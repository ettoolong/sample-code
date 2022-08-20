import React from 'react';
import ThemeSwitch from 'components/ThemeSwitch'
import './Setting.scss'

function Setting() {

  return (
    <div className="setting">
      <div className="theme">
        <div>Theme</div>
        <ThemeSwitch />
      </div>
    </div>
  );
}

export default Setting;
