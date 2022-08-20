import React from 'react';
import NewItem from 'components/NewItem';
import './NewsList.scss'

function NewsList() {
  return (
    <div className="newsList">
      <NewItem text="news 1" />
      <NewItem text="news 2" />
    </div>
  );
}

export default NewsList;
