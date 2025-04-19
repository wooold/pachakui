import React from 'react';
import { colors, spacing, borders, typography, shadows, iconSize } from '@/tokens';
import { FiChevronDown } from 'react-icons/fi';

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
    value,
    onChange,
    placeholder,
    disabled = false,
    size = 'md',
    name,
}) => {
    const { paddingY, paddingX, fontSize, icon } = sizeMap[size];

    return (
        <div
            style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: colors.background.base,
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
                    paddingRight: icon, // para evitar que el ícono se monte sobre el texto
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
                    width: icon,
                    height: icon,
                }}
            >
                <FiChevronDown />
            </div>
        </div>
    );
};
