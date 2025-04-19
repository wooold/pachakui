import React from 'react';
import { colors, spacing, borders, typography, shadows, iconSize } from '@/tokens';

type InputSize = 'sm' | 'md' | 'lg';

type InputProps = {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    size?: InputSize;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    type?: string;
    name?: string;
};

const sizeMap: Record<InputSize, {
    paddingY: string;
    paddingX: string;
    gap: string;
    fontSize: string;
    icon: string;
}> = {
    sm: {
        paddingY: spacing.sm,
        paddingX: spacing.md,
        gap: spacing.sm,
        fontSize: typography.fontSize.sm, // 14px
        icon: iconSize.sm,                // 16px
    },
    md: {
        paddingY: spacing.md,
        paddingX: spacing.mdPlus,
        gap: spacing.smPlus,
        fontSize: typography.fontSize.base, // 16px
        icon: iconSize.md,                  // 20px
    },
    lg: {
        paddingY: spacing.mdPlus,
        paddingX: spacing.lg,
        gap: spacing.md,
        fontSize: typography.fontSize.lg, // 18px
        icon: iconSize.lg,                // 24px
    },
};

export const Input: React.FC<InputProps> = ({
    value,
    onChange,
    placeholder,
    disabled = false,
    size = 'md',
    iconLeft,
    iconRight,
    type = 'text',
    name,
}) => {
    const { paddingY, paddingX, gap, fontSize, icon } = sizeMap[size];

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: colors.background.base,
                border: `1px solid ${colors.neutral.border}`,
                borderRadius: borders.radius.md,
                padding: `${paddingY} ${paddingX}`,
                fontSize,
                lineHeight: typography.lineHeight.base,
                color: colors.text.primary,
                gap,
                cursor: disabled ? 'not-allowed' : 'text',
                opacity: disabled ? 0.5 : 1,
                transition: 'all 0.2s ease-in-out',
            }}
        >
            {iconLeft && (
                <span
                    style={{
                        width: icon,
                        height: icon,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                    }}
                >
                    {iconLeft}
                </span>
            )}

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                style={{
                    all: 'unset',
                    flex: 1,
                    fontSize,
                    width: '100%',
                    color: colors.text.primary,
                }}
            />

            {iconRight && (
                <span
                    style={{
                        width: icon,
                        height: icon,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                    }}
                >
                    {iconRight}
                </span>
            )}
        </div>
    );
};
