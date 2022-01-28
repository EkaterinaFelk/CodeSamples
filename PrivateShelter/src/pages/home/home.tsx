import React from 'react';
import { Link } from 'react-router-dom';
import { PetsWidgetContainer } from '../../components/pets/pets_widget_container';
import PATHS from '../../core/constants/paths';

import './home.scss';

function HomePage() {
    return (
        <>
            <div className="app-home_description">
                <h2>Welcome to the Private Shelter!</h2>
                <p>Here you can find a friend, tap the link below!</p>
                <Link to={PATHS.shelter}>Shelter your pet</Link>
            </div>
            <PetsWidgetContainer renderWasSheltered />
        </>
    );
}

export default React.memo(HomePage);
