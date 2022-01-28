import { combineReducers } from 'redux';
import pets from './pets/pets.reducer';
import modal from './modal/modal.reducer';

export default combineReducers({
    pets,
    modal,
});
