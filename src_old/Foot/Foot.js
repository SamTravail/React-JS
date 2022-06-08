import copr from './copr.svg';
import './Foot.css';

function Foot() {
    return (
      <div className="Foot">
        <footer className="Foot-footer">
          <p>le nom de votre compagnie</p>
          <img src={copr} className="Foot-logo" alt="logo" />
        </footer>  
      </div>
    );
  }
  export default Foot;