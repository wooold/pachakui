import React from 'react';
import { colors } from '@tokens';
import { sizeMap } from '@utils/sizemap';

type SelectSize = 'sm' | 'md' | 'lg';

type SelectProps = {
    options: { value: string; label: string }[];
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    size?: SelectSize;
    name?: string;
};

export const Select: React.FC<SelectProps> = ({
    options,
    value,
    onChange,
    placeholder,
    disabled = false,
    size = 'md',
    name,
}) => {
    const {
        paddingX,
        paddingY,
        fontSize,
        gap,
        icon: iconSize,
    } = sizeMap[size];

    return (
        <div
            style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: colors.neutral.background,
                border: `1px solid ${colors.neutral.border}`,
                borderRadius: '6px',
                padding: `${paddingY} ${paddingX}`,
                fontSize,
                lineHeight: '1.5',
                color: colors.text.primary,
                cursor: disabled ? 'not-allowed' : 'pointer',
                opacity: disabled ? 0.5 : 1,
                transition: 'all 0.2s ease-in-out',
            }}
        >
            <select
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                style={{
                    all: 'unset',
                    appearance: 'none',
                    width: '100%',
                    fontSize,
                    color: colors.text.primary,
                    paddingRight: iconSize,
                }}
            >
                {placeholder && (
                    <option value="" disabled hidden>{placeholder}</option>
                )}
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>

            <div
                style={{
                    position: 'absolute',
                    right: paddingX,
                    pointerEvents: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: iconSize,
                    height: iconSize,
                }}
            >
                ▼
            </div>
        </div>
    );
};
