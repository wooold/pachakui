<<<<<<< HEAD
<<<<<<< Updated upstream
import { ChangeEvent } from 'react';
import { colors, spacing, typography, borders } from '@/tokens';
=======
import React from 'react';
import { colors } from '@tokens';
import { sizeMap } from '@utils/sizemap';

type InputSize = 'sm' | 'md' | 'lg';
>>>>>>> Stashed changes
=======
import React from 'react';
import { colors, spacing, borders, typography, shadows, iconSize } from '@/tokens';

type InputSize = 'sm' | 'md' | 'lg';
>>>>>>> origin/main

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

<<<<<<< HEAD
<<<<<<< Updated upstream
export const Input = ({
    id,
=======
export const Input: React.FC<InputProps> = ({
>>>>>>> Stashed changes
=======
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
>>>>>>> origin/main
    value,
    onChange,
    placeholder,
    disabled = false,
<<<<<<< HEAD
<<<<<<< Updated upstream
}: InputProps) => {
=======
=======
>>>>>>> origin/main
    size = 'md',
    iconLeft,
    iconRight,
    type = 'text',
    name,
}) => {
<<<<<<< HEAD
    const {
        paddingX,
        paddingY,
        gap,
        fontSize,
        icon: iconSize,
    } = sizeMap[size];

>>>>>>> Stashed changes
=======
    const { paddingY, paddingX, gap, fontSize, icon } = sizeMap[size];

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
                display: 'flex',
                alignItems: 'center',
                backgroundColor: colors.background.base,
>>>>>>> origin/main
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
<<<<<<< HEAD
        />
=======
                display: 'flex',
                alignItems: 'center',
                backgroundColor: colors.neutral.background,
                border: `1px solid ${colors.neutral.border}`,
                borderRadius: '6px',
                padding: `${paddingY} ${paddingX}`,
                fontSize,
                lineHeight: '1.5',
                color: colors.text.primary,
                gap,
                cursor: disabled ? 'not-allowed' : 'text',
                opacity: disabled ? 0.5 : 1,
                transition: 'all 0.2s ease-in-out',
            }}
=======
>>>>>>> origin/main
        >
            {iconLeft && (
                <span
                    style={{
<<<<<<< HEAD
                        width: iconSize,
                        height: iconSize,
=======
                        width: icon,
                        height: icon,
>>>>>>> origin/main
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
<<<<<<< HEAD
                        width: iconSize,
                        height: iconSize,
=======
                        width: icon,
                        height: icon,
>>>>>>> origin/main
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
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> origin/main
    );
};
