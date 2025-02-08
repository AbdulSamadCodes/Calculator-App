import React from 'react';
import { useThemeContext } from '/src/hooks/useThemeContext.jsx';

import { themePallete } from '/src/Constants/themePallete.js';

function EqualsKey() {
  const [ currentTheme ] = useThemeContext();

  return (
    <button className='key-btn equals-key'

      style={{
        color: themePallete[currentTheme]['text-primary'],
        backgroundColor: themePallete[currentTheme]['bg-equals_key'],
        boxShadow: `0 3px 1px ${themePallete[currentTheme]['shadow-equals_key']}`
      }}
    >
      =
    </button>
  );
}

export { EqualsKey };