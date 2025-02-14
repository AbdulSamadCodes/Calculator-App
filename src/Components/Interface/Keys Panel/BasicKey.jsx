import React from 'react';

import { useThemeContext } from '/src/hooks/useThemeContext.jsx';
import { useOutputScreenContext } from '/src/hooks/useOutputScreenContext.jsx';
import { useInputExpressionContext } from '/src/hooks/useInputExpressionContext.jsx';

import { themePallete } from '/src/Constants/themePallete.js';
import { operators } from '/src/Constants/index.js'

function BasicKey({ keyText }) {
  const [currentTheme] = useThemeContext();
  const [outputScreenText, setOutputScreenText] = useOutputScreenContext();
  const [inputExpression, setInputExpression] = useInputExpressionContext();

  const handleKeyClick = (event) => {
    const { innerText: pressedValue } = event.target;

    setInputExpression(prevExp => {
      if (operators.includes(prevExp.at(-1)) && operators.includes(pressedValue))
        return prevExp;

      return prevExp += pressedValue;
    });

    setOutputScreenText((prevText) => {
      if (operators.includes(prevText.at(-1)) && operators.includes(pressedValue))
        return prevText;

      return prevText += pressedValue
    })
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