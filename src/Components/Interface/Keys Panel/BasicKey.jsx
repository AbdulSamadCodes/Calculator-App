import React from 'react';
import { useThemeContext } from '/src/hooks/useThemeContext.jsx';

import { themePallete } from '/src/Constants/themePallete.js';

function BasicKey({ keyText }) {
  const [ currentTheme ] = useThemeContext();

  return (
    <button className='key-btn basic-key'

     style={{
      color :themePallete[currentTheme]['text-secondary'] ,
      backgroundColor : themePallete[currentTheme]['bg-primary_key'],
      boxShadow : `0 3px 1px ${themePallete[currentTheme]['shadow-primary_key']}`
     }} 
    >
      {keyText}
    </button>
  );
}

export { BasicKey };