import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hder from './Header/Header'
import App from './App/App';
import Foot from './Foot/Foot';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hder />
    <App />
    <Foot />
  </React.StrictMode>
);