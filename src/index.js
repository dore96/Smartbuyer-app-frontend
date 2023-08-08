import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TokenProvider } from './components/TokenContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <TokenProvider>
          <App />
      </TokenProvider>
  </React.StrictMode>
);
