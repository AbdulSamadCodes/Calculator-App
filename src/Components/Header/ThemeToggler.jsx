import React from 'react';
import { ThemeSelector } from '/src/Components/Header/ThemeSelector.jsx';

function ThemeToggler() {

  return (
    <div className='flex gap-x-6'>

      <span className='self-end text-white font-bold 
      text-[0.7rem] tracking-widest'>
        THEME
      </span>

      <ThemeSelector />
    </div>
  );
}

export { ThemeToggler };