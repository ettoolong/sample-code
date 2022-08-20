import React, { useContext } from 'react';
import ContextStore from 'store';

function PageContainer({ children }) {
  const { darkTheme } = useContext(ContextStore)
  return (
    <div className={`pageContent ${darkTheme ? 'darkTheme' : ''}`}>
      {children}
    </div>
  );
}

export default PageContainer;
