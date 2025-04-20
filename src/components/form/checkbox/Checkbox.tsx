import React from 'react';
import { colors } from '@tokens';
import { sizeMap } from '@utils/sizemap';

type CheckboxSize = 'sm' | 'md' | 'lg';

type CheckboxProps = {
    label?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    name?: string;
    size?: CheckboxSize;
};

export const Checkbox: React.FC<CheckboxProps> = ({
    label,
    checked = false,
    onChange,
    disabled = false,
    name,
    size = 'md',
}) => {
    const {
        fontSize,
        icon: checkboxSize,
        gap,
    } = sizeMap[size];

    const checkboxId = React.useId();

    return (
        <label
            htmlFor={checkboxId}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap,
                fontSize,
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
                    width: checkboxSize,
                    height: checkboxSize,
                    border: `1px solid ${colors.neutral.border}`,
                    borderRadius: '4px',
                    accentColor: colors.brand.primary,
                    cursor: disabled ? 'not-allowed' : 'pointer',
                }}
            />
            {label}
        </label>
    );
};
