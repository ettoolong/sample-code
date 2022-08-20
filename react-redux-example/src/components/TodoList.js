import React from 'react';
import { useSelector } from 'react-redux';
import './TodoList.css';

function TodoList() {
  const items = useSelector(state => state.items)

  return (
    <div className="todoList">
      {items.map((i, index) => <div key={`i.${index}`}>{i}</div>)}
    </div>
  );
}

export default TodoList;
