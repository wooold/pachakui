import React from 'react';
import { colors } from '@tokens';
import { sizeMap } from '@utils/sizemap';

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
    const {
        paddingX,
        paddingY,
        gap,
        fontSize,
        icon: iconSize,
    } = sizeMap[size];

    return (
        <div
            style={{
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
    );
};
