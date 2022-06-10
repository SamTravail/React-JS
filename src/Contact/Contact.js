import React from 'react';
import {useState} from "react";

import './Contact.css';


function Contact () {

const[name, setName] = useState("");
const[prenom, setPrenom] = useState("");
const[mail, setMail] = useState("");
const [textarea, setTextarea] = useState("Saisissez votre commentaire.");
const[jour, setJour] = useState("Lundi");

const handleJour = (event) => {
  setJour (event.target.value);
}

const selectText = (event) => { 
  setTextarea(event.target.value);
}


const handleChange = (event) => {
  setTextarea(event.target.value);
}

const validation = (event) => {
  event.preventDefault();
  alert(`Vous etes : ${prenom} ${name} , votre email : ${mail} , votre message : ${textarea} , nous somme le : ${jour}`);
};


console.log("name :", name);
console.log("prenom :", prenom);
console.log("mail :", mail);
console.log("text :", textarea);
console.log("jour :", jour);


  return (
    <div className='contact'>
      <h1>Contact</h1>
      <form onSubmit={validation}>
        <label>
          Nom :
          <input 
          type="text" 
          value={name} 
          onChange={(element) => setName(element.target.value)} />
        </label>
  
        <label>
          Prenom :
          <input 
          type="text" 
          value={prenom} 
          onChange={(element) => setPrenom(element.target.value)} />
        </label>
     
        <label>
          mail :
          <input 
          type="email" 
          value={mail} 
          onChange={(element) => setMail(element.target.value)} />
        </label>
        <textarea className="textarea" value={textarea} onChange={handleChange}/>

        <label>
          Jours de la semaine :
        <select value={jour} onChange={handleJour}>
          <option value="lundi">Lundi</option>
          <option value="mardi">Mardi</option>
          <option value="mercredi">Mercredi</option>
          <option value="jeudi">Jeudi</option>
          <option value="vendredi">Vendredi</option>
          <option value="samedi">Samedi</option>
          <option value="dimanche">Dimanche</option>
        </select>
        </label>
        <input type="submit"></input>

        <input type="range" class="form-range" id="customRange1"></input>
        
      </form>
    </div>
  );
}

export default Contact;