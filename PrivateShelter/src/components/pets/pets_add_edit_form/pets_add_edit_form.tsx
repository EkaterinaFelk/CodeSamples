import React, {
    useEffect,
    useCallback,
    ChangeEvent,
    FormEvent,
    useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    onChangePetName,
    onChangePetAge,
    onResetAddEditPet,
    onLoadPetsData,
    addNewPet,
    editPet,
    onChangePetKind,
} from '../../../store/pets/pets.action';
import { Input } from '../../input';
import { Button } from '../../button';
import { getPetsData } from '../../../store/pets/pets.selectors';

type PetsAddEditFormProps = {
    id?: string;
    onClose: () => void;
};

function PetsAddEditForm({ id, onClose }: PetsAddEditFormProps) {
    const dispatch = useDispatch();
    const petsData = useSelector(getPetsData);

    const isEditMode = useMemo(() => Boolean(id), []);

    useEffect(() => {
        if (id) {
            dispatch(onLoadPetsData(id));
        }
        return () => {
            dispatch(onResetAddEditPet());
        };
    }, [dispatch, id]);

    const handleOnChangeName = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(onChangePetName(e.currentTarget.value));
        },
        [dispatch]
    );

    const handleOnChangeKind = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(onChangePetKind(e.currentTarget.value));
        },
        [dispatch]
    );

    const handleOnChangeAge = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(onChangePetAge(Number(e.currentTarget.value)));
        },
        [dispatch]
    );

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            dispatch(isEditMode ? editPet(petsData) : addNewPet(petsData));
            onClose();
            e.preventDefault();
        },
        [dispatch, isEditMode, petsData]
    );

    return (
        <form className="form-default form-inline" onSubmit={onSubmit}>
            <label>Pets Name:</label>
            <Input
                onChange={handleOnChangeName}
                name="name"
                placeholder="Pets name.."
                value={petsData.name}
            />

            <label>Pets Kind:</label>
            <Input
                onChange={handleOnChangeKind}
                name="kind"
                placeholder="Pets kind.."
                value={petsData.kind}
            />

            <label>Age:</label>
            <Input
                onChange={handleOnChangeAge}
                name="age"
                placeholder="Age"
                value={petsData.age}
            />

            <Button text="Confirm" type="submit" />
        </form>
    );
}

export default React.memo(PetsAddEditForm);
