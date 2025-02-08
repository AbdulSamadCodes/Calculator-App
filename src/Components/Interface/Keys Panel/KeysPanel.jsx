import React from 'react';
import { useThemeContext } from '/src/hooks/useThemeContext.jsx';

import { BasicKey } from '/src/Components/Interface/Keys Panel/BasicKey.jsx';
import { UtilityKey } from '/src/Components/Interface/Keys Panel/UtilityKey.jsx';
import { EqualsKey } from '/src/Components/Interface/Keys Panel/EqualsKey.jsx';

import { themePallete } from '/src/Constants/themePallete.js';
import { basicKeys } from '/src/Constants/index.js';

function KeysPanel() {
  const [currentTheme] = useThemeContext();

  return (
    <div className='keys-panel grid grid-cols-4 gap-4 p-6 rounded-md'
      style={{ backgroundColor: themePallete[currentTheme]['bg-primary'] }}
    >

      {
        basicKeys.map((keyText, index) => {
          return <BasicKey key={index} keyText={keyText} />
        })

      }

      <UtilityKey text={'DEL'} />

      <UtilityKey text={'RESET'} />

      <EqualsKey />
    </div>
  );
}

export { KeysPanel };