import Contenu from '../Contenu/Contenu';
import Emoji from '../Emoji/Emoji';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Message from '../Message/Message';
import Produit from '../Produit/Produit';
import './App.css';

export default function App() {

  // const entete = 'titre';
  // const titre = <h1>Un titre h1</h1>;

  return (
      <div className="App">
      <Header />
      <Emoji />
      <Produit className="cardProduit" />
      <Message messagePasse="Hello you les reacteux !" prenom="Katy"/>
      <Message messagePasse="La planete bleu." prenom="Sandy"/>
      <Message messagePasse="Stop avec tes messages pourris !" prenom="billy"/>
      <Contenu />
      <Footer />
      </div>
  );
}

