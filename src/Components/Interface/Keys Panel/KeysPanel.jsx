import React from 'react';
import { useThemeContext } from '/src/hooks/useThemeContext.jsx';

import { BasicKey } from '/src/Components/Interface/Keys Panel/BasicKey.jsx';
import { UtilityKey } from '/src/Components/Interface/Keys Panel/UtilityKey.jsx';
import { EqualsKey } from '/src/Components/Interface/Keys Panel/EqualsKey.jsx';

import { themePallete } from '/src/Constants/themePallete.js';
import { basicKeys } from '/src/Constants/index.js';

import { useOutputScreenContext } from '/src/hooks/useOutputScreenContext.jsx';
import { useInputExpressionContext } from '/src/hooks/useInputExpressionContext.jsx';

import { deleteExpression } from '/src/utilities/deleteExpression.js';
import { resetExpression } from '/src/utilities/resetExpression.js';

function KeysPanel() {
  const [ currentTheme ] = useThemeContext();
  const [ outputScreenText , setOutputScreenText ] = useOutputScreenContext();
  const [ inputExpression , setInputExpression ] = useInputExpressionContext();

  const handleDEL = () => {
    setOutputScreenText(prevExp => deleteExpression(prevExp));
    setInputExpression(prevExp => deleteExpression(prevExp));
  }

  const handleReset = () => {
    setOutputScreenText(prevExp => resetExpression(prevExp));
    setInputExpression(prevExp => resetExpression(prevExp));
  }

  return (
    <div className='keys-panel grid grid-cols-4 gap-4 p-6 rounded-md'
      style={{ backgroundColor: themePallete[currentTheme]['bg-primary'] }}
    >

      {
        basicKeys.map((keyText, index) => {
          return <BasicKey key={index} keyText={keyText} />
        })

      }

      <UtilityKey text={'DEL'} onClick={handleDEL} />

      <UtilityKey text={'RESET'} onClick={handleReset} />

      <EqualsKey />
    </div>
  );
}

export { KeysPanel };