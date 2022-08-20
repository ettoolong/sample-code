import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from 'components/NavigationBar';
import PageContainer from 'components/PageContainer';

import News from 'routes/News';
import Chat from 'routes/Chat';
import Todo from 'routes/Todo';
import Setting from 'routes/Setting';
import ContextStore from './store';

import './App.scss';

const routes = [
  { name: 'news', path: '/news', element: <News /> },
  { name: 'chat', path: '/chat', element: <Chat /> },
  { name: 'todo', path: '/todo', element: <Todo /> },
  { name: 'setting', path: '/setting', element: <Setting /> },
]

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  const contextValue = useMemo(
    () => ({ darkTheme, setDarkTheme }),
    [darkTheme]
  );

  return (
    <div className="app">
      <BrowserRouter>
        <ContextStore.Provider value={contextValue}>
          <NavigationBar />
          {/* <div className="pageContent"> */}
          <PageContainer>
            <Routes>
              {
                routes.map(i => (
                  <Route
                    key={i.name}
                    exact
                    name={i.name}
                    path={i.path}
                    element={i.element} />
                ))
              }
              <Route path="*" element={<Navigate to="/news" />} />
            </Routes>
          </PageContainer>
        </ContextStore.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
