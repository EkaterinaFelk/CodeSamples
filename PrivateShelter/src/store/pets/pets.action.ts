/* eslint-disable no-console */
import { Dispatch } from 'redux';
import * as api from '../../api/pets.api';
import Pet from '../../core/models/pet';
import {
    fetchPetsStart,
    fetchPetsEnd,
    shelterPetEnd,
    changePetName,
    changePetKind,
    changePetAge,
    addNewPetEnd,
    resetAddEditPet,
    loadPetsData,
    editPetEnd,
} from './pets.actionCreators';
import { PetsAction } from './pets.models';

export const getPets = () => (dispatch: Dispatch<PetsAction>) => {
    dispatch(fetchPetsStart());
    api.getPets()
        .then((result) => dispatch(fetchPetsEnd(result.data)))
        .catch((err) => console.log(err));
};

export const shelterPet = (pet: Pet) => (dispatch: Dispatch<PetsAction>) => {
    api.shelterPet(pet)
        .then((result) => dispatch(shelterPetEnd(result.data)))
        .catch((err) => console.log(err));
};

export const addNewPet = (pet: Pet) => (dispatch: Dispatch<PetsAction>) => {
    api.addNewPet(pet)
        .then((result) => dispatch(addNewPetEnd(result.data)))
        .catch((err) => console.log(err));
};

export const editPet = (pet: Pet) => (dispatch: Dispatch<PetsAction>) => {
    api.editPet(pet)
        .then((result) => dispatch(editPetEnd(result.data)))
        .catch((err) => console.log(err));
};

export const onChangePetName =
    (name: string) => (dispatch: Dispatch<PetsAction>) =>
        dispatch(changePetName(name));

export const onChangePetKind =
    (kind: string) => (dispatch: Dispatch<PetsAction>) =>
        dispatch(changePetKind(kind));

export const onChangePetAge =
    (age: number) => (dispatch: Dispatch<PetsAction>) =>
        dispatch(changePetAge(age));

export const onResetAddEditPet = () => (dispatch: Dispatch<PetsAction>) =>
    dispatch(resetAddEditPet());

export const onLoadPetsData =
    (id: string) => (dispatch: Dispatch<PetsAction>) =>
        dispatch(loadPetsData(id));
