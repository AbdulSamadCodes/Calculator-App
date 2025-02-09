import React from 'react';

import { useThemeContext } from '/src/hooks/useThemeContext.jsx';
import { useOutputScreenContext } from '/src/hooks/useOutputScreenContext.jsx';
import { useInputExpressionContext } from '/src/hooks/useInputExpressionContext.jsx';

import { themePallete } from '/src/Constants/themePallete.js';

function BasicKey({ keyText }) {
  const [ currentTheme ] = useThemeContext();
  const [ outputScreenText, setOutputScreenText ] = useOutputScreenContext();
  const [ inputExpression , setInputExpression ] = useInputExpressionContext();
    
  const handleKeyClick = (event) => {
    const operators = ['+', '-', 'x', '/'];
    
    const { innerText: pressedValue } = event.target;
    
    setInputExpression(prevExp => prevExp += pressedValue);

    if (operators.includes(pressedValue)) {
      setOutputScreenText('');

      return;
    }

    setOutputScreenText((prevText) => prevText+=pressedValue);
  };

  return (
    <button className='key-btn basic-key'

      style={{
        color: themePallete[currentTheme]['text-secondary'],
        backgroundColor: themePallete[currentTheme]['bg-primary_key'],
        boxShadow: `0 3px 1px ${themePallete[currentTheme]['shadow-primary_key']}`
      }}

      onClick={handleKeyClick}
    >
      {keyText}
    </button>
  );
}

export { BasicKey };