import React from 'react';
import ReactDOM from 'react-dom/client';
import { PasswordGenerator } from './components/PasswordGenerator/PasswordGenerator';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PasswordGenerator />
  </React.StrictMode>
);
