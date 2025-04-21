import React from 'react';
import { colors } from '@tokens/colors';

export interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: () => void;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

export const Checkbox = ({ label, checked, onChange, disabled = false }: CheckboxProps) => {
    return (
        <label
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: colors.text.primary,
                opacity: disabled ? 0.5 : 1,
            }}
        >
            <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />
            {label}
        </label>
    );
};
