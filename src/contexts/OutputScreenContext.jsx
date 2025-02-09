import React from 'react';
import { useState, createContext } from 'react';

const OutputScreenContext = createContext(null);

function OutputScreenContextProvider({ children }) {
  const [outputScreenText, setOutputScreenText] = useState('');

  return (
    <OutputScreenContext.Provider
      value={{ outputScreenText, setOutputScreenText }}>

      {children}
      
    </ OutputScreenContext.Provider>
  )
}

export { OutputScreenContext, OutputScreenContextProvider };