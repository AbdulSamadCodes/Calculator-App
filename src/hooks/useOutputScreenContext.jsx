import React from 'react';
import { useContext } from 'react';
import { OutputScreenContext } from '/src/contexts/OutputScreenContext.jsx';

function useOutputScreenContext() {
  const { outputScreenText, setOutputScreenText } = useContext(OutputScreenContext);

  if (outputScreenText === null || outputScreenText === undefined) {
    throw new Error('Context not reachable');
  }

  return [ outputScreenText, setOutputScreenText ];
}

export { useOutputScreenContext };