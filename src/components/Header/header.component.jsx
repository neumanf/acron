import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            {/* <Logo className="logo" /> */}
            <h2>ACRON</h2>
        </Link>
        <nav>
            <Link className="item" to="/about">Sobre</Link>
            <Link className="item" to="/usage">Como utilizar</Link>
            <Link className="item" to="/app">
                    <button className="app-btn">APP</button>
            </Link>
        </nav>
    </div>
)

export default Header;