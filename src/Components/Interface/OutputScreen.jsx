import React from 'react';

import { useThemeContext } from '/src/hooks/useThemeContext.jsx';
import { useOutputScreenContext } from '/src/hooks/useOutputScreenContext.jsx';

import { themePallete } from '/src/Constants/themePallete.js';

function OutputScreen() {
  const [ currentTheme ] = useThemeContext();
  const [ outputScreenText ] = useOutputScreenContext();

  return (
    <div className='output-screen p-6 text-right 
     text-[1.8rem] text-white font-bold rounded-md
     min-h-[5.5rem] 
     '
      style={
        {
          color: themePallete[currentTheme]['text-primary'],
          backgroundColor: themePallete[currentTheme]['bg-secondary']
        }
      }
    >
      {outputScreenText}
    </div>
  );
}

export { OutputScreen };