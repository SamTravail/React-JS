import Emoji from '../Emoji/Emoji';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import logo from '../logo.svg';
import './App.css';

export default function App() {


  return (
      <div className="App">
        {/* Ceci est un commentaire en JSX */}
      <Header />
      <Emoji />
     
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
      <Footer />
      </div>
  );
}

