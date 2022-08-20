import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMessage, faList, faGear } from '@fortawesome/free-solid-svg-icons'
import ContextStore from 'store';
import './NavigationBar.scss'

const buttons = [
  { to: '/news', icon: faBell, text: 'News' },
  { to: '/chat', icon: faMessage, text: 'Chat' },
  { to: '/todo', icon: faList, text: 'Todo' },
  { to: '/setting', icon: faGear, text: 'Setting' },
]

function NavigationBar() {
  const location = useLocation()
  const { darkTheme } = useContext(ContextStore)

  return (
    <div className={`navigationBar ${darkTheme ? 'darkTheme' : ''}`}>
      {buttons.map(i => (
        <Link key={i.text} to={i.to}>
          <div className={`button ${location.pathname === i.to ? 'active' : ''}`}>
            <FontAwesomeIcon icon={i.icon} />
            <span className="text">{i.text}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NavigationBar;
