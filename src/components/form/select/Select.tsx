import React from 'react';
import { colors } from '@/tokens/theme/colors/colors';

export interface SelectProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { label: string; value: string }[];
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

export const Select = ({ value, onChange, options, disabled = false }: SelectProps) => {
    return (
        <select
            value={value}
            onChange={onChange}
            disabled={disabled}
            style={{
                padding: '8px 12px',
                border: `1px solid ${colors.control.default}`,
                borderRadius: '4px',
                color: colors.text.primary,
                opacity: disabled ? 0.5 : 1,
            }}
        >
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
};
