import { createSelector } from 'reselect';
import Pet from '../../core/models/pet';
import { PetsState } from './pets.models';

export const getAllPets = (state: PetsState) =>
    state.pets.petsList && state.pets.petsList.length
        ? state.pets.petsList
        : [];

export const filterPetsByAvailableStatus = createSelector(
    [getAllPets],
    (pets) => pets.filter((pet) => pet.available)
);

export const filterPetsByWasShelteredStatus = createSelector(
    [getAllPets],
    (pets) => pets.filter((pet) => !pet.available)
);

export const getPetsData = (state: PetsState) =>
    state.pets && state.pets.addEditPet ? state.pets.addEditPet : new Pet();
