import React from 'react';
import ReactDOM from 'react-dom/client';


// Importation des composants
import App from './App/App';

// Importation des css
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);


