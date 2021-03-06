import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  

import App from './App/App';
import Contenu from './Contenu/Contenu';
import Emoji from './Emoji/Emoji';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Contact from './Contact/Contact';
import Produit from './Produit/Produit';
import Layout from './Layout/Layout';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Contenu />} />
            <Route path='contenu' element={<Contenu />} />
            <Route path='contact' element={<Contact />} />
            <Route path='produit' element={<Produit />} />
          </Route>
        </Routes> 
      </BrowserRouter>
    
      {/* <Header />
      <Emoji />
      <Produit />
      <Message messagePasse="Hello you les reacteux !" prenom="Katy"/>
      <Message messagePasse="La planete bleu." prenom="Sandy"/>
      <Message messagePasse="Stop avec tes messages pourris !" prenom="billy"/>
      <Contenu />
      <Footer /> */}
      <Footer />
  </React.StrictMode>
);


