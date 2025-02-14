import React from 'react';

import { useThemeContext } from '/src/hooks/useThemeContext.jsx';
import { useOutputScreenContext } from '/src/hooks/useOutputScreenContext.jsx';
import { useInputExpressionContext } from '/src/hooks/useInputExpressionContext.jsx';

import { themePallete } from '/src/Constants/themePallete.js';
import { calculateExpressionResult } from '/src/utilities/calculateExpressionResult.js'; 

function EqualsKey() {
  const [ currentTheme ] = useThemeContext();
  const [ , setOutputScreenText ] = useOutputScreenContext();
  const [ inputExpression , setInputExpression ] = useInputExpressionContext();

  const evaluateResult = () => {
    const result = calculateExpressionResult(inputExpression);
    const formattedResult = Intl.NumberFormat('en-IN').format(result);

    setOutputScreenText(formattedResult);
  };
  
  return (
    <button className='key-btn equals-key'
   
      style={{
        color: themePallete[currentTheme]['text-primary'],
        backgroundColor: themePallete[currentTheme]['bg-equals_key'],
        boxShadow: `0 3px 1px ${themePallete[currentTheme]['shadow-equals_key']}`
      }}

      onClick={evaluateResult}
    >
      =
    </button>
  );
}

export { EqualsKey };