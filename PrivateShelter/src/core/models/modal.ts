export type ModalData = {
    id?: string;
    title?: string;
    text?: string;
    onConfirm?: () => void;
    component?: ({ onClose }: { onClose: () => void }) => JSX.Element;
};
