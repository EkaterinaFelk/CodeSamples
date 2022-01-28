import Pet from '../../core/models/pet';
import {
    ADD_NEW_PET_END,
    CHANGE_PET_AGE,
    CHANGE_PET_KIND,
    CHANGE_PET_NAME,
    EDIT_PET_END,
    FETCH_PETS_END,
    FETCH_PETS_START,
    LOAD_PETS_DATA,
    RESET_ADD_EDIT_PET,
    SHELTER_PET_END,
} from './pets.actionTypes';

export type PetsAction =
    | {
          type: typeof FETCH_PETS_END;
          payload: {
              pets: Pet[];
          };
      }
    | {
          type: typeof CHANGE_PET_NAME;
          payload: { name: string };
      }
    | {
          type: typeof CHANGE_PET_KIND;
          payload: { kind: string };
      }
    | {
          type: typeof CHANGE_PET_AGE;
          payload: { age: number };
      }
    | {
          type:
              | typeof ADD_NEW_PET_END
              | typeof EDIT_PET_END
              | typeof SHELTER_PET_END;
          payload: {
              pet: Pet;
          };
      }
    | {
          type: typeof FETCH_PETS_START | typeof RESET_ADD_EDIT_PET;
      }
    | {
          type: typeof LOAD_PETS_DATA;
          payload: { id: string };
      };

export type PetsState = {
    pets: {
        petsList: Array<Pet>;
        addEditPet: Pet;
        error: null;
    };
};
