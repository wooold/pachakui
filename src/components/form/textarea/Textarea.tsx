import React from 'react';
import { colors } from '@/tokens/theme/colors/colors';

export interface TextareaProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

export const Textarea = ({ value, onChange, placeholder, disabled = false }: TextareaProps) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            style={{
                padding: '8px 12px',
                border: `1px solid ${colors.control.default}`,
                borderRadius: '4px',
                color: colors.text.primary,
                opacity: disabled ? 0.5 : 1,
            }}
        />
    );
};
