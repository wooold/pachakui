import React from 'react';
import { colors, spacing, typography } from '@/tokens';

type RadioButtonProps = {
    label?: string;
    value: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    disabled?: boolean;
};

export const RadioButton: React.FC<RadioButtonProps> = ({
    label,
    value,
    checked = false,
    onChange,
    name,
    disabled = false,
}) => {
    const radioId = React.useId();

    return (
        <label
            htmlFor={radioId}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing.sm,
                fontSize: typography.fontSize.base,
                color: disabled ? colors.text.muted : colors.text.primary,
                cursor: disabled ? 'not-allowed' : 'pointer',
            }}
        >
            <input
                id={radioId}
                type="radio"
                value={value}
                checked={checked}
                onChange={onChange}
                name={name}
                disabled={disabled}
                style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    accentColor: colors.brand.primary,
                    cursor: disabled ? 'not-allowed' : 'pointer',
                }}
            />
            {label}
        </label>
    );
};
