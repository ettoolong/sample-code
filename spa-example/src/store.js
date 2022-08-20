import { createContext } from 'react';

const ContextStore = createContext({
  darkTheme: false,
  setDarkTheme: () => {},
})

export default ContextStore
