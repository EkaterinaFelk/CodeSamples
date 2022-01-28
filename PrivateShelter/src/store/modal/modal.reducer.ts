import { OPEN_MODAL, CLOSE_MODAL } from './modal.actionTypes';
import { ModalAction, ModalState } from './modal.models';

export default function modal(
    state: ModalState['modal'] = { modals: [] },
    action: ModalAction
) {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modals: [...state.modals, { ...action.payload }],
            };
        case CLOSE_MODAL:
            return {
                ...state,
                modals: state.modals.filter(
                    ({ id }) => id !== action.payload.id
                ),
            };
        default:
            return state;
    }
}
