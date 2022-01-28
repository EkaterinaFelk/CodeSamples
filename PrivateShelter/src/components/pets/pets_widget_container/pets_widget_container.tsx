import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PetsWidget } from '../pets_widget';
import { getPets } from '../../../store/pets/pets.action';
import {
    filterPetsByAvailableStatus,
    filterPetsByWasShelteredStatus,
} from '../../../store/pets/pets.selectors';

type PetsWidgetsContainerProps = {
    renderAvailable?: boolean;
    renderWasSheltered?: boolean;
};

function PetsWidgetsContainer({
    renderAvailable = false,
    renderWasSheltered = false,
}: PetsWidgetsContainerProps) {
    const dispatch = useDispatch();
    const availablePets = useSelector(filterPetsByAvailableStatus);
    const wasShelteredPets = useSelector(filterPetsByWasShelteredStatus);

    useEffect(() => {
        dispatch(getPets());
    }, [dispatch]);

    return (
        <>
            {renderAvailable && (
                <PetsWidget petsList={availablePets} available />
            )}
            {renderWasSheltered && <PetsWidget petsList={wasShelteredPets} />}
        </>
    );
}

export default React.memo(PetsWidgetsContainer);
