import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_ITEM } from 'constants';
import './Header.css';

function Header() {
  const [ text, setText ] = useState('')
  const dispatch = useDispatch()

  function onAdd() {
    dispatch({
      type: ADD_ITEM,
      payload: {newItem: text}
    })
    setText('')
  }

  function onInput(e) {
    setText(e.target.value)
  }

  return (
    <div className="header">
      <input value={text} onInput={onInput} />
      <button onClick={onAdd}>+</button>
    </div>
  );
}

export default Header;
