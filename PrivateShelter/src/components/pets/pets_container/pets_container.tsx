import React from 'react';
import { PetsItem } from '../pets_item';
import { EmptyContent } from '../../empty_content';
import Pet from '../../../core/models/pet';

import './pets_container.scss';

type PetsContainerProps = {
    pets: Pet[];
};

function PetsContainer({ pets }: PetsContainerProps) {
    return (
        <div className="pets-container">
            {pets && pets.length ? (
                pets.map((pet) => <PetsItem key={pet.id} pet={pet} />)
            ) : (
                <EmptyContent entityLabel="Pets" />
            )}
        </div>
    );
}

export default PetsContainer;
