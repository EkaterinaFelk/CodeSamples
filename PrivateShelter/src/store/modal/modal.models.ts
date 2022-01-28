import { ModalData } from '../../core/models/modal';
import { CLOSE_MODAL, OPEN_MODAL } from './modal.actionTypes';

export type ModalPayload = ModalData;

export type ModalAction = {
    type: typeof OPEN_MODAL | typeof CLOSE_MODAL;
    payload: ModalPayload;
};

export type ModalState = {
    modal: {
        modals: ModalData[];
    };
};
