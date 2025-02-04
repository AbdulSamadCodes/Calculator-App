import React from 'react';
import { useThemeContext } from '/src/hooks/useThemeContext.jsx';

import { themePallete } from '/src/Constants/themePallete.js';

function Logo() {
  const [ currentTheme , setCurrentTheme ] = useThemeContext();   
  
  return (
    <span className='font-bold text-[1.7rem]'
     style={{ color: themePallete[currentTheme]['text-primary'] }}>
      calc
    </span>
  );
}

export { Logo };