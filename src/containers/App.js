import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

// =============================================================================

import React from 'react';
import Alert from 'react-s-alert';

import ConfigForm from './ConfigForm';
import IsogramOutput from './IsogramOutput';

function App() {
  return (
    <div className="container app-container">
      <ConfigForm />
      <IsogramOutput />
      <Alert stack={{ limit: 1 }} />
    </div>
  );
}

export default App;
