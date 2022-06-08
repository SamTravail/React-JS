import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App/App';
import Header from './Header/Header';
import Emoji from './Emoji/Emoji';
import Contenu from './Contenu/Contenu';
import Footer from './Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <Emoji />
    <Contenu />
    <Footer />
  </React.StrictMode>
);

