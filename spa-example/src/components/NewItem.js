import React, { useContext } from 'react';
import ContextStore from 'store';
import './NewItem.scss'

function NewItem({ text }) {
  const { darkTheme } = useContext(ContextStore)
  return (
    <div className={`newsItem ${darkTheme ? 'darkTheme' : ''}`}>
      {text}
    </div>
  );
}

export default NewItem;
