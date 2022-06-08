import './Header.css';
import logo from '../logo.svg';

export default function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={logo} className='logoHeader' />
            </div>
            <nav>
                <ul className='menuHeader'>
                    <li><a href="">Lien 1</a></li>
                    <li><a href="">Lien 2</a></li>
                    <li><a href="">Lien 3</a></li>
                </ul>
            </nav>
        </header>
    )
};
