import React from 'react';
import { createContext } from 'react';
import { useLocalStorage } from '/src/hooks/useLocalStorage.jsx';

const ThemeContext = createContext(null);

function ThemeContextProvider({ children }) {
  const [ currentTheme , setCurrentTheme ] = useLocalStorage('theme' , 'default');
  
  return (
    <ThemeContext.Provider 
      value={{ currentTheme , setCurrentTheme }}>

      { children }
      
    </ ThemeContext.Provider>
  )
}

export { ThemeContext , ThemeContextProvider };