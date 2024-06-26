import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@mui/material'; 
import GlobalCssPriority from './GlobalCssPriority';
import { app, analytics } from './firebaseConfig'; // Import Firebase configuration

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GlobalCssPriority>
      <CssBaseline />
      <App />
    </GlobalCssPriority>
  </React.StrictMode>
);

reportWebVitals();