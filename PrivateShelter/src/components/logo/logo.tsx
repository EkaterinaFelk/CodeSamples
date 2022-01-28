import React from 'react';

import './logo.scss';
import logo from '../../assets/logo.svg';

function Logo() {
    return (
        <div className="app-logo">
            <img src={logo} alt="Logo" className="app-logo__img" />
            <h1 className="app-logo__title">Private shelter</h1>
        </div>
    );
}

export default Logo;
