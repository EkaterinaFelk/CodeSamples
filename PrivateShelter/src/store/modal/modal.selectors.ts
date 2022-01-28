import { ModalState } from './modal.models';

export const getIsModal = (state: ModalState) => state.modal.modals.length > 0;
