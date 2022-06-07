import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
    </div>
  );
}

function Footer(){
  return (
    <div className="Foot">
    <footer className="Foot-footer">
      <p>le nom de votre compagnie</p>
      <img src={logo} className="Foot-logo" alt="logo" />

    </footer>  
    </div>
    );
}
export default App;
