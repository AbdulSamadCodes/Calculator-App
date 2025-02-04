import React from 'react';
import { Header } from '/src/Components/Header/Header.jsx';

function Container() {
  
  return (
    <div className='container max-w-[500px] 
     mx-auto pt-6 pb-6 px-6'
     >
      
      <Header />

    </div>
  );
}

export { Container };