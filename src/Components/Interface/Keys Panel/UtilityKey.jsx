import React from 'react';
import { useThemeContext } from '/src/hooks/useThemeContext.jsx';

import { themePallete } from '/src/Constants/themePallete.js';

function UtilityKey( {text , onClick} ) {
  const [ currentTheme ] = useThemeContext();

  return (
    <button className={`key-btn utility-key ${text}-key`}
    
      style={{
        color: themePallete[currentTheme]['text-primary'],
        backgroundColor: themePallete[currentTheme]['bg-secondary_key'],
        boxShadow: `0 3px 1px ${themePallete[currentTheme]['shadow-secondary_key']}`
      }}
      
      onClick={onClick}
    >
      { text }
    </button>
  );
}

export { UtilityKey };