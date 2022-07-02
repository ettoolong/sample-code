import React from 'react';
import './Tab.scss'

function Tab({ text, selected, onClick }) {
  return (
    <div
      className={`tab ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {text}
    </div>
  )
}

export default Tab;
