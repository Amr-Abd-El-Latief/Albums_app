

import './Header.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <header>
                <h2>Albums</h2>
            </header>
            <div className='menu-buttons-container'>

                <Link to="/albums">
                    Albums
                </Link>
            </div>
        </div>
    );
}

export default Header;



