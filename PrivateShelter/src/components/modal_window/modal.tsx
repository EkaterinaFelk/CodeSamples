import React, { useCallback } from 'react';
import { Button } from '../button';
import { ModalData } from '../../core/models/modal';

import './modal.scss';

type ModalProps = {
    onClose: (item: ModalData) => void;
    item: ModalData;
};

function Modal({ onClose, item }: ModalProps) {
    const handleOnClose = useCallback(() => {
        onClose(item);
    }, [item, onClose]);

    const onConfirm = useCallback(() => {
        if (item.onConfirm) {
            item.onConfirm();
            onClose(item);
        }
    }, [item, onClose]);

    return (
        <div className="app-modal__wrapper">
            <div className="app-modal">
                <button
                    type="button"
                    className="app-modal__button--close"
                    onClick={handleOnClose}
                >
                    x
                </button>
                {Boolean(item.component) && (
                    <div className="app-modal__header">{item.title}</div>
                )}
                <div className="app-modal__content">
                    {item.component ? (
                        <item.component onClose={handleOnClose} />
                    ) : (
                        <div className="app-modal__content--text">
                            {item.text}
                        </div>
                    )}
                </div>
                {!item.component && (
                    <div className="app-modal__footer">
                        <Button
                            text="Confirm"
                            type="button"
                            onClick={onConfirm}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default React.memo(Modal);
