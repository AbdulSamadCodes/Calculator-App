import React from 'react';
import { Logo } from '/src/Components/Header/Logo.jsx';
import { ThemeToggler } from '/src/Components/Header/ThemeToggler.jsx';

function Header() {

  return (
    <header className='header flex justify-between items-center'>

      <Logo />
      <ThemeToggler />
      
    </header>
  );  
}

export { Header };