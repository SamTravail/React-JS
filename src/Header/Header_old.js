import './Header.css';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

// import Pages from './Pages/Pages';
import { Outlet } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={logo} className='logoHeader' />
            </div>
            <nav>

                    <ul className='menuHeader'>
                        {/* <li><a href="">Lien 1</a></li>   */}
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li><Link to="/message">Message</Link></li>
                        <li><Link to="/produit">Produit</Link></li>
                    </ul>
                <Outlet />
            </nav>
        </header>
    )
};
