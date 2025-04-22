import React from 'react';
import { colors } from '@tokens/colors';

export interface RadioButtonProps {
    label: string;
    name: string;
    value: string;
    checked: boolean;
    onChange: () => void;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

export const RadioButton = ({ label, name, value, checked, onChange, disabled = false }: RadioButtonProps) => {
    return (
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: colors.text.primary, opacity: disabled ? 0.5 : 1 }}>
            <input type="radio" name={name} value={value} checked={checked} onChange={onChange} disabled={disabled} />
            {label}
        </label>
    );
};
