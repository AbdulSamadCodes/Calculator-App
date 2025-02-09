import React from 'react';
import { useState, createContext } from 'react';

const InputExpressionContext = createContext(null);

function InputExpressionProvider({ children }) {
  const [ inputExpression , setInputExpression ] = useState('');

  return (
    <InputExpressionContext.Provider 
     value={{ inputExpression , setInputExpression }}>

      {children}

    </ InputExpressionContext.Provider>
  )
}

export { InputExpressionContext , InputExpressionProvider };

