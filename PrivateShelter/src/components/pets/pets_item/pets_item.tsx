import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { onOpenModal } from '../../../store/modal/modal.action';
import { shelterPet } from '../../../store/pets/pets.action';
import { PetsAddEditForm } from '../pets_add_edit_form';
import { Button } from '../../button';
import Pet from '../../../core/models/pet';

import './pets_item.scss';

type PetsItemProps = {
    pet: Pet;
};

export type FormProps = {
    onClose: () => void;
};

function PetsItem({ pet }: PetsItemProps) {
    const dispatch = useDispatch();

    const renderEditForm = useCallback(
        ({ onClose }: FormProps) => (
            <PetsAddEditForm id={pet.id} onClose={onClose} />
        ),
        []
    );

    const handleOnShelter = useCallback(() => {
        dispatch(shelterPet(pet));
    }, []);

    const onShelter = useCallback(() => {
        dispatch(
            onOpenModal({
                id: pet.id,
                text: 'Are you sure?',
                onConfirm: handleOnShelter,
            })
        );
    }, []);

    const onEdit = useCallback(() => {
        dispatch(
            onOpenModal({
                id: pet.id,
                title: 'edit pet profile',
                component: renderEditForm,
            })
        );
    }, []);

    return (
        <div className="pets-item-container">
            <div>name: {pet.name}</div>
            <div>kind: {pet.kind}</div>
            <div>age: {pet.age}</div>
            {Boolean(pet.available) && (
                <>
                    <Button text="Shelter" type="button" onClick={onShelter} />
                    <Button text="Edit" type="button" onClick={onEdit} />
                </>
            )}
        </div>
    );
}

export default React.memo(PetsItem);
