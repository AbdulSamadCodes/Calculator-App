import React from 'react';
import { ThemeSelector } from '/src/Components/Header/ThemeSelector.jsx';

function ThemeToggler() {

  return (
    <div className='flex items-center'>

      <span className='text-white font-semibold 
      text-[0.7rem] tracking-widest'>
        THEME
      </span>

    </div>
  );
}

export { ThemeToggler };