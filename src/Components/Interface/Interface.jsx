import React from 'react';

import { OutputScreen } from '/src/Components/Interface/OutputScreen.jsx';
import { KeysPanel } from '/src/Components/Interface/Keys Panel/KeysPanel.jsx';

import { InputExpressionProvider } from '/src/contexts/InputExpressionContext.jsx';

function Interface() {

  return (
    <main className='interface grid gap-8'>

      <OutputScreen />

      <InputExpressionProvider>
        <KeysPanel />
      </InputExpressionProvider>

    </main>
  );
}

export { Interface };