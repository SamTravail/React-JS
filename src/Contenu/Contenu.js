import React, {useState} from 'react';
import './Contenu.css';
import logo from '../logo.svg';

export default function Contenu({initialCount}) {

  const [count, setCount] = useState(initialCount);
  
      return (
      <>
        <header className="App-header">
        <div className="compteur">
      Total : {count}
      <button onClick={() => setCount(0)}>Réinitialiser</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </>
      )
}