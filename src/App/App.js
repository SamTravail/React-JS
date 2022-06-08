import Contenu from '../Contenu/Contenu';
import Emoji from '../Emoji/Emoji';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Produit from '../Produit/Produit';
import './App.css';

export default function App() {

  // const entete = 'titre';
  // const titre = <h1>Un titre h1</h1>;

  return (
      <div className="App">
        {/* Ceci est un commentaire en JSX */}
      <Header />
      <Emoji />
      {/* <h1 className={entete}>Titre React</h1>
      {titre} */}
      <Produit />
      <Contenu />
      <Footer />
      </div>
  );
}

