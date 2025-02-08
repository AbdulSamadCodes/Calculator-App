import React from 'react';

import { useThemeContext } from '/src/hooks/useThemeContext.jsx';
import { themePallete } from '/src/Constants/themePallete.js';

function OutputScreen() {
  const [ currentTheme ] = useThemeContext();

  return (
    <div className='output-screen p-6 text-right 
     text-[1.8rem] text-white font-bold rounded-md'
      style={
        { 
          color : themePallete[currentTheme]['text-primary'] ,
          backgroundColor: themePallete[currentTheme]['bg-output_screen'] 
        }
      }
    >
      399 , 981
    </div>
  );
}

export { OutputScreen };