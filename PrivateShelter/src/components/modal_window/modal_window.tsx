import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalPortal from './modal_portal';
import Modal from './modal';
import { onCloseModal } from '../../store/modal/modal.action';
import { ModalState } from '../../store/modal/modal.models';

function ModalWindow() {
    const dispatch = useDispatch();
    const modal = useSelector((state: ModalState) => state.modal);

    const handleOnCloseModal = useCallback(
        (item) => {
            dispatch(onCloseModal(item));
        },
        [dispatch]
    );

    return (
        <>
            {modal.modals.map((item) => (
                <ModalPortal key={item.id}>
                    <Modal item={item} onClose={handleOnCloseModal} />
                </ModalPortal>
            ))}
        </>
    );
}

export default React.memo(ModalWindow);
