<<<<<<< Updated upstream
import { ChangeEvent } from 'react';
import { colors, spacing, typography, borders } from '@/tokens';
=======
import React from 'react';
import { colors } from '@tokens';
import { sizeMap } from '@utils/sizemap';

type InputSize = 'sm' | 'md' | 'lg';
>>>>>>> Stashed changes

type InputProps = {
    id?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
};

<<<<<<< Updated upstream
export const Input = ({
    id,
=======
export const Input: React.FC<InputProps> = ({
>>>>>>> Stashed changes
    value,
    onChange,
    placeholder = '',
    disabled = false,
<<<<<<< Updated upstream
}: InputProps) => {
=======
    size = 'md',
    iconLeft,
    iconRight,
    type = 'text',
    name,
}) => {
    const {
        paddingX,
        paddingY,
        gap,
        fontSize,
        icon: iconSize,
    } = sizeMap[size];

>>>>>>> Stashed changes
    return (
        <input
            id={id}
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
            placeholder={placeholder}
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
        >
            {iconLeft && (
                <span
                    style={{
                        width: iconSize,
                        height: iconSize,
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
                        width: iconSize,
                        height: iconSize,
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
>>>>>>> Stashed changes
    );
};
