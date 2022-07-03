import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// styles
import './index.css';

//store and provider
import { StoreProvider } from './stores/storeProvider';
import rootStore from './stores/rootStore';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider value={rootStore}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
);
