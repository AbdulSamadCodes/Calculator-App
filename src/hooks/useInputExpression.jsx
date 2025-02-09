import React from 'react';
import { useContext } from 'react';
import { InputExpressionContext } from '/src/contexts/InputExpressionContext.jsx';

function useInputExpressionContext() {
  const { inputExpression , setInputExpression } = useContext(InputExpressionContext);

  if (inputExpression === null || inputExpression === undefined) {
    throw new Error('Context not reachable');
  }

  return [ inputExpression , setInputExpression ];
}

export { useInputExpressionContext };