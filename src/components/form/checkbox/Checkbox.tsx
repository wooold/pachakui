import React from 'react';
import { colors, spacing, borders, typography } from '@/tokens';

type CheckboxProps = {
    label?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    name?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({
    label,
    checked = false,
    onChange,
    disabled = false,
    name,
}) => {
    const checkboxId = React.useId();

    return (
        <label
            htmlFor={checkboxId}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing.sm,
                fontSize: typography.fontSize.base,
                color: disabled ? colors.text.muted : colors.text.primary,
                cursor: disabled ? 'not-allowed' : 'pointer',
                userSelect: 'none',
            }}
        >
            <input
                id={checkboxId}
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                style={{
                    width: '16px',
                    height: '16px',
                    border: `1px solid ${colors.neutral.border}`,
                    borderRadius: borders.radius.sm,
                    accentColor: colors.brand.primary,
                    cursor: disabled ? 'not-allowed' : 'pointer',
                }}
            />
            {label}
        </label>
    );
};
