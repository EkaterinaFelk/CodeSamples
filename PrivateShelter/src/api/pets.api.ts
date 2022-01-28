import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { SERVER_URL, API_URLS } from '../core/constants/apiUrl';
import Pet from '../core/models/pet';

export const getPets = () => axios.get(`${SERVER_URL}${API_URLS.pets}`);

export const getPetsKind = () => axios.get(`${SERVER_URL}${API_URLS.petKind}`);

export const shelterPet = (pet: Pet) =>
    axios.put(`${SERVER_URL}${API_URLS.pets}/${pet.id}`, {
        ...pet,
        available: false,
    });

export const addNewPet = (pet: Pet) =>
    axios.post(`${SERVER_URL}${API_URLS.pets}`, {
        ...pet,
        id: uuidv4(),
        available: true,
    });

export const editPet = (pet: Pet) =>
    axios.put(`${SERVER_URL}${API_URLS.pets}/${pet.id}`, {
        ...pet,
        name: pet.name,
        age: pet.age,
    });
