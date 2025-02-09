import { useState } from 'react'
import { Container } from '/src/Components/Container.jsx';
import { ThemeContextProvider } from '/src/contexts/ThemeContext.jsx';

function App() {

  return (
    
    < ThemeContextProvider>
      <Container />
    </ ThemeContextProvider>
  )
}

export default App
