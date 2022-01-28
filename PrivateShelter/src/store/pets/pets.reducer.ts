import * as types from './pets.actionTypes';
import Pet from '../../core/models/pet';
import { PetsAction, PetsState } from './pets.models';

const initialState: PetsState['pets'] = {
    petsList: [],
    addEditPet: new Pet(),
    error: null,
};

export default function pets(
    state: PetsState['pets'] = initialState,
    action: PetsAction
) {
    switch (action.type) {
        case types.FETCH_PETS_END:
            return {
                ...state,
                petsList: [...action.payload.pets],
                error: null,
            };

        case types.SHELTER_PET_END:
            return {
                ...state,
                petsList: state.petsList.map((pet) => {
                    let res = pet;

                    if (pet.id === action.payload.pet.id) {
                        res = {
                            ...pet,
                            available: action.payload.pet.available,
                        };
                    }

                    return res;
                }),
                error: null,
            };

        case types.ADD_NEW_PET_END:
            return {
                ...state,
                petsList: [
                    ...state.petsList,
                    {
                        ...action.payload.pet,
                        available: true,
                    },
                ],
                error: null,
            };

        case types.EDIT_PET_END:
            return {
                ...state,
                petsList: state.petsList.map((pet) => {
                    let res = pet;

                    if (pet.id === action.payload.pet.id) {
                        res = {
                            ...pet,
                            name: action.payload.pet.name,
                            kind: action.payload.pet.kind,
                            age: action.payload.pet.age,
                        };
                    }

                    return res;
                }),
                error: null,
            };

        case types.CHANGE_PET_NAME:
            return {
                ...state,
                addEditPet: {
                    ...state.addEditPet,
                    name: action.payload.name,
                },
            };

        case types.CHANGE_PET_KIND:
            return {
                ...state,
                addEditPet: {
                    ...state.addEditPet,
                    kind: action.payload.kind,
                },
            };

        case types.CHANGE_PET_AGE:
            return {
                ...state,
                addEditPet: {
                    ...state.addEditPet,
                    age: action.payload.age,
                },
            };

        case types.RESET_ADD_EDIT_PET:
            return {
                ...state,
                addEditPet: new Pet(),
            };

        case types.LOAD_PETS_DATA:
            return {
                ...state,
                addEditPet: state.petsList.find(
                    (pet) => pet.id === action.payload.id
                ),
            };

        default:
            return state;
    }
}
