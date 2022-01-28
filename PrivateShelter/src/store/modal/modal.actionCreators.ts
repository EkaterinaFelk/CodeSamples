import { v4 as uuidv4 } from 'uuid';
import * as types from './modal.actionTypes';
import { ModalAction, ModalPayload } from './modal.models';

export const openModal = (payload: ModalPayload): ModalAction => ({
    type: types.OPEN_MODAL,
    payload: {
        ...payload,
        id: uuidv4(),
    },
});

export const closeModal = (payload: ModalPayload): ModalAction => ({
    type: types.CLOSE_MODAL,
    payload,
});
