<<<<<<< Updated upstream
import { ChangeEvent } from 'react';
import { colors, spacing, typography, borders } from '@/tokens';
=======
import React from 'react';
import { colors } from '@tokens';
import { sizeMap } from '@utils/sizemap';
>>>>>>> Stashed changes

type Option = {
    label: string;
    value: string;
};

type SelectProps = {
    id?: string;
    value: string;
    onChange: (value: string) => void;
    options: Option[];
    disabled?: boolean;
};

<<<<<<< Updated upstream
export const Select = ({
    id,
=======
export const Select: React.FC<SelectProps> = ({
    options,
>>>>>>> Stashed changes
    value,
    onChange,
    options,
    disabled = false,
<<<<<<< Updated upstream
}: SelectProps) => {
=======
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

>>>>>>> Stashed changes
    return (
        <select
            id={id}
            value={value}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
            disabled={disabled}
            style={{
<<<<<<< Updated upstream
                width: '100%',
                padding: `${spacing.sm} ${spacing.md}`,
                fontFamily: typography.fontFamily.base,
                fontSize: typography.fontSize.md,
                fontWeight: typography.fontWeight.normal,
                lineHeight: typography.lineHeight.normal,
                color: colors.text.primary,
                backgroundColor: colors.neutral.white,
                border: `1px solid ${colors.neutral.border}`,
                borderRadius: borders.radius.md,
                outline: 'none',
                transition: 'border-color 0.2s ease-in-out',
            }}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
=======
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
>>>>>>> Stashed changes
    );
};
