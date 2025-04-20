<<<<<<< HEAD
<<<<<<< Updated upstream
import { ChangeEvent } from 'react';
import { colors, spacing, typography, borders } from '@/tokens';
=======
import React from 'react';
import { colors } from '@tokens';
import { sizeMap } from '@utils/sizemap';
>>>>>>> Stashed changes
=======
import React from 'react';
import { colors, spacing, borders, typography, shadows, iconSize } from '@/tokens';
import { FiChevronDown } from 'react-icons/fi';
>>>>>>> origin/main

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

<<<<<<< HEAD
<<<<<<< Updated upstream
export const Select = ({
    id,
=======
export const Select: React.FC<SelectProps> = ({
    options,
>>>>>>> Stashed changes
=======
const sizeMap: Record<SelectSize, {
    paddingY: string;
    paddingX: string;
    fontSize: string;
    icon: string;
}> = {
    sm: {
        paddingY: spacing.sm,
        paddingX: spacing.md,
        fontSize: typography.fontSize.sm,
        icon: iconSize.sm,
    },
    md: {
        paddingY: spacing.md,
        paddingX: spacing.mdPlus,
        fontSize: typography.fontSize.base,
        icon: iconSize.md,
    },
    lg: {
        paddingY: spacing.mdPlus,
        paddingX: spacing.lg,
        fontSize: typography.fontSize.lg,
        icon: iconSize.lg,
    },
};

export const Select: React.FC<SelectProps> = ({
    options,
>>>>>>> origin/main
    value,
    onChange,
    placeholder,
    disabled = false,
<<<<<<< HEAD
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
=======
    size = 'md',
    name,
}) => {
    const { paddingY, paddingX, fontSize, icon } = sizeMap[size];

>>>>>>> origin/main
    return (
        <div
            style={{
<<<<<<< HEAD
<<<<<<< Updated upstream
                width: '100%',
                padding: `${spacing.sm} ${spacing.md}`,
                fontFamily: typography.fontFamily.base,
                fontSize: typography.fontSize.md,
                fontWeight: typography.fontWeight.normal,
                lineHeight: typography.lineHeight.normal,
                color: colors.text.primary,
                backgroundColor: colors.neutral.white,
=======
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: colors.background.base,
>>>>>>> origin/main
                border: `1px solid ${colors.neutral.border}`,
                borderRadius: borders.radius.md,
                padding: `${paddingY} ${paddingX}`,
                fontSize,
                lineHeight: typography.lineHeight.base,
                color: colors.text.primary,
                cursor: disabled ? 'not-allowed' : 'pointer',
                opacity: disabled ? 0.5 : 1,
                transition: 'all 0.2s ease-in-out',
            }}
        >
<<<<<<< HEAD
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
=======
>>>>>>> origin/main
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
<<<<<<< HEAD
                    paddingRight: iconSize,
=======
                    paddingRight: icon, // para evitar que el ícono se monte sobre el texto
>>>>>>> origin/main
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
<<<<<<< HEAD
                    width: iconSize,
                    height: iconSize,
                }}
            >
                ▼
            </div>
        </div>
>>>>>>> Stashed changes
=======
                    width: icon,
                    height: icon,
                }}
            >
                <FiChevronDown />
            </div>
        </div>
>>>>>>> origin/main
    );
};
