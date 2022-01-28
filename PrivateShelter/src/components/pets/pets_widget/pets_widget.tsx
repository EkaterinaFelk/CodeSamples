import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Pet from '../../../core/models/pet';
import { onOpenModal } from '../../../store/modal/modal.action';
import { Button } from '../../button';
import { PetsAddEditForm } from '../pets_add_edit_form';
import { PetsContainer } from '../pets_container';

import './pets_widget.scss';

type PetsWidgetProps = {
    available?: boolean;
    petsList: Pet[];
};

function PetsWidget({ available = false, petsList }: PetsWidgetProps) {
    const dispatch = useDispatch();

    const renderAddForm = useCallback(
        ({ onClose }) => <PetsAddEditForm onClose={onClose} />,
        []
    );

    const onAddNewPet = useCallback(() => {
        dispatch(
            onOpenModal({
                title: 'add new pet',
                component: renderAddForm,
            })
        );
    }, [dispatch]);

    return (
        <div className="pets-widget">
            <h2 className="pets-widget__title">
                {available ? 'Available pets' : 'Already at home'}
            </h2>
            {available && (
                <Button text="add new" type="button" onClick={onAddNewPet} />
            )}
            <PetsContainer pets={petsList} />
        </div>
    );
}

export default React.memo(PetsWidget);
