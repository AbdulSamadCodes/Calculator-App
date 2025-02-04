import React from 'react';
import { useThemeContext } from '/src/hooks/useThemeContext.jsx';

import { ThemeSelector } from '/src/Components/Header/ThemeSelector.jsx';

import { themePallete } from '/src/Constants/themePallete.js';

function ThemeToggler() {
  const [ currentTheme , setCurrentTheme ] = useThemeContext();   

  return (
    <div className='flex gap-x-6'>

      <span className='self-end text-white font-bold 
      text-[0.7rem] tracking-widest'
       style={{ color: themePallete[currentTheme]['text-primary'] }}
       >
        THEME
      </span>

      <ThemeSelector />
    </div>
  );
}

export { ThemeToggler };