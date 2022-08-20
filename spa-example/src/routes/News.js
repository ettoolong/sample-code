import React from 'react';
import Header from 'components/Header'
import NewsList from 'components/NewsList'
import './News.scss'

function News() {
  return (
    <div className="news">
      <Header></Header>
      <NewsList></NewsList>
    </div>
  );
}

export default News;
