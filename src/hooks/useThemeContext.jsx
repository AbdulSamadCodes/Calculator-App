import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '/src/contexts/ThemeContext.jsx';

function useThemeContext() {
  const { currentTheme , setCurrentTheme } = useContext(ThemeContext);

  if(currentTheme === null || currentTheme === undefined) {
    throw new Error('Context not reachable');
  }

  return [currentTheme , setCurrentTheme ];
}

export { useThemeContext };