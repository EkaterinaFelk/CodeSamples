import React from 'react';
import { Link } from 'react-router-dom';
import { PetsWidgetContainer } from '../../components/pets/pets_widget_container';
import PATHS from '../../core/constants/paths';

function ShelterPage() {
    return (
        <>
            <Link to={PATHS.home}>Go to home</Link>
            <PetsWidgetContainer renderAvailable />
        </>
    );
}

export default React.memo(ShelterPage);
