import React, { Suspense } from 'react';
import './utils/i18n';
import { HashRouter } from 'react-router-dom';
import { positions, Provider } from 'react-alert';
import ReactAlertTemplate from './components/ReactAlertTemplate';
import RootWrapper from './wrappers/RootWrapper';

function App() {
  return (
    <HashRouter>
      <Suspense fallback={null}>
        <Provider template={ReactAlertTemplate} timeout={5000} position={positions.TOP_CENTER}>
          <RootWrapper />
        </Provider>
      </Suspense>
    </HashRouter>
  );
}

export default App;
