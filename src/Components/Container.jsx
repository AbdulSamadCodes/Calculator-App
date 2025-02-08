import React from 'react';
import { Header } from '/src/Components/Header/Header.jsx';
import { Interface } from '/src/Components/Interface/Interface.jsx';

function Container() {
  
  return (
    <div className='container grid max-w-[450px] 
     mx-auto pt-6 pb-6 px-6 gap-10'
     >
      
      <Header />
      <Interface />

    </div>
  );
}

export { Container };