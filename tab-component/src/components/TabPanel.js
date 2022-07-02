import React from 'react';
import './TabPanel.scss'

function TabPanel({ content, show }) {
  return (
    <div className={`tabPanel ${show ? '' : 'hidden'}`}>{content}</div>
  )
}

export default TabPanel;
