import React, { ChangeEvent } from 'react';

import './input.scss';

type InputProps = {
    placeholder: string;
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
};

function Input({ placeholder, name, onChange, value }: InputProps) {
    return (
        <input
            className="app-input"
            type="text"
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            value={value}
        />
    );
}

export default Input;
