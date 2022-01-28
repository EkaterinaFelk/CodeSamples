import React, { ButtonHTMLAttributes, useMemo } from 'react';

import './button.scss';

type ButtonProps = {
    text: string;
    type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    onClick?: () => void;
};

function Button({ text, type, onClick }: ButtonProps) {
    const isSubmit = useMemo(() => type === 'submit', []);

    return (
        <button
            className="app-button"
            type={isSubmit ? 'submit' : 'button'}
            onClick={!isSubmit && onClick ? onClick : undefined}
        >
            {text}
        </button>
    );
}

export default Button;
