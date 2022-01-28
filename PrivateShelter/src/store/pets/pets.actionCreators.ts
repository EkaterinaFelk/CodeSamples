import Pet from '../../core/models/pet';
import * as types from './pets.actionTypes';
import { PetsAction } from './pets.models';

export const fetchPetsStart = (): PetsAction => ({
    type: types.FETCH_PETS_START,
});

export const fetchPetsEnd = (pets: Pet[]): PetsAction => ({
    type: types.FETCH_PETS_END,
    payload: {
        pets,
    },
});

export const shelterPetEnd = (pet: Pet): PetsAction => ({
    type: types.SHELTER_PET_END,
    payload: {
        pet,
    },
});

export const addNewPetEnd = (pet: Pet): PetsAction => ({
    type: types.ADD_NEW_PET_END,
    payload: {
        pet,
    },
});

export const editPetEnd = (pet: Pet): PetsAction => ({
    type: types.EDIT_PET_END,
    payload: {
        pet,
    },
});

export const changePetName = (name: string): PetsAction => ({
    type: types.CHANGE_PET_NAME,
    payload: {
        name,
    },
});

export const changePetKind = (kind: string): PetsAction => ({
    type: types.CHANGE_PET_KIND,
    payload: {
        kind,
    },
});

export const changePetAge = (age: number): PetsAction => ({
    type: types.CHANGE_PET_AGE,
    payload: {
        age,
    },
});

export const resetAddEditPet = (): PetsAction => ({
    type: types.RESET_ADD_EDIT_PET,
});

export const loadPetsData = (id: string): PetsAction => ({
    type: types.LOAD_PETS_DATA,
    payload: {
        id,
    },
});
