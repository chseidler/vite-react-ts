import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './localization/I18n.init';
import './tailwind/app.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <App />
    </React.Suspense>
  </React.StrictMode>,
);
