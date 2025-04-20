import React from 'react';
import { colors } from '@tokens';
import { sizeMap } from '@utils/sizemap';

type RadioButtonSize = 'sm' | 'md' | 'lg';

type RadioButtonProps = {
    label?: string;
    value: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    disabled?: boolean;
    size?: RadioButtonSize;
};

export const RadioButton: React.FC<RadioButtonProps> = ({
    label,
    value,
    checked = false,
    onChange,
    name,
    disabled = false,
    size = 'md',
}) => {
    const {
        fontSize,
        icon: radioSize,
        gap,
    } = sizeMap[size];

    const radioId = React.useId();

    return (
        <label
            htmlFor={radioId}
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
                id={radioId}
                type="radio"
                value={value}
                checked={checked}
                onChange={onChange}
                name={name}
                disabled={disabled}
                style={{
                    width: radioSize,
                    height: radioSize,
                    borderRadius: '50%',
                    accentColor: colors.brand.primary,
                    cursor: disabled ? 'not-allowed' : 'pointer',
                }}
            />
            {label}
        </label>
    );
};
