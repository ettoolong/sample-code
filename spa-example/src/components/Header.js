import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import ContextStore from 'store';
import './Header.scss'

function Header() {
  const { darkTheme } = useContext(ContextStore)

  return (
    <div className={`header ${darkTheme ? 'darkTheme' : ''}`}>
      <div className="info">{darkTheme ? '[Dark]' : '[Light]'}</div>
      <div className="searchBox">
        <input className="searchTerm" type="text" placeholder="input text..." />
    	  <button className="searchButton" type="submit">
          <FontAwesomeIcon size="1x" color="#FFF" icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="menu">
        <FontAwesomeIcon size="2x" icon={faEllipsis} />
      </div>
    </div>
  );
}

export default Header;
