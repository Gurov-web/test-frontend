import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { useAuthStore } from './store/authStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

useAuthStore.getState().initializeAuth();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);