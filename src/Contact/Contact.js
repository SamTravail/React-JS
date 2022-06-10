import React from 'react';
import {useState} from "react";


function Contact () {

const[name, setName] = useState("");
const[prenom, setPrenom] = useState("");
const[mail, setMail] = useState("");

const validation = () => {
  event.preventDefault();
  alert(`Votre prenom est : ${prenom}`)
};

console.log("name :", name);
console.log("prenom :", prenom);
console.log("mail :", mail);


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
          type="text" 
          value={mail} 
          onChange={(element) => setMail(element.target.value)} />
        </label>
        
        <input type="submit"></input>
         
        
      </form>
    </div>
  );
}

export default Contact;