import React, { ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

type ModalPortalProps = {
    children: ReactNode;
};

const ModalPortal = ({ children }: ModalPortalProps) => {
    const targetRef = useRef(document.createElement('div'));

    useEffect(() => {
        const target = targetRef.current;
        document.body.appendChild(target);
        return () => {
            document.body.removeChild(target);
        };
    }, []);

    return ReactDOM.createPortal(children, targetRef.current);
};

export default React.memo(ModalPortal);
