import React from 'react';
import { Logo } from '../../components/logo';

import './header.scss';

function Header() {
    return (
        <header className="app-header">
            <Logo />
        </header>
    );
}

export default Header;
