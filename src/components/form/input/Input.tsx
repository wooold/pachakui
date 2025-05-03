import React from 'react';
import { colors } from '@/tokens/theme/colors/colors';

export interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    type?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
}

export const Input = ({
    value,
    onChange,
    placeholder,
    disabled = false,
    size = 'md',
    type = 'text',
    iconLeft,
    iconRight,
}: InputProps) => {
    return (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            {iconLeft && (
                <span style={{ position: 'absolute', left: '12px', pointerEvents: 'none' }}>
                    {iconLeft}
                </span>
            )}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                style={{
                    padding: '8px 12px',
                    paddingLeft: iconLeft ? '36px' : '12px',
                    paddingRight: iconRight ? '36px' : '12px',
                    border: `1px solid ${colors.control.default}`,
                    borderRadius: '4px',
                    color: colors.text.primary,
                    opacity: disabled ? 0.5 : 1,
                    width: '100%',
                }}
            />
            {iconRight && (
                <span style={{ position: 'absolute', right: '12px', pointerEvents: 'none' }}>
                    {iconRight}
                </span>
            )}
        </div>
    );
};
