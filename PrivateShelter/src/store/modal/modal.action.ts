import { Dispatch } from 'redux';
import { openModal, closeModal } from './modal.actionCreators';
import { ModalAction, ModalPayload } from './modal.models';

export const onOpenModal =
    (payload: ModalPayload) => (dispatch: Dispatch<ModalAction>) =>
        dispatch(openModal(payload));

export const onCloseModal =
    (payload: ModalPayload) => (dispatch: Dispatch<ModalAction>) =>
        dispatch(closeModal(payload));
