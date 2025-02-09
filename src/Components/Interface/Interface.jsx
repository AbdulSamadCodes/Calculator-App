import React from 'react';

import { OutputScreen } from '/src/Components/Interface/OutputScreen.jsx';
import { KeysPanel } from '/src/Components/Interface/Keys Panel/KeysPanel.jsx';

function Interface() {

  return (
    <main className='interface grid gap-8'>

      <OutputScreen />
      <KeysPanel />

    </main>
  );
}

export { Interface };