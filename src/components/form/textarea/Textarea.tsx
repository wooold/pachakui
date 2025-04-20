import React from 'react';
import { colors } from '@tokens';
import { sizeMap } from '@utils/sizemap';

type TextareaSize = 'sm' | 'md' | 'lg';

type TextareaProps = {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    size?: TextareaSize;
    name?: string;
    rows?: number;
};

export const Textarea: React.FC<TextareaProps> = ({
    value,
    onChange,
    placeholder,
    disabled = false,
    size = 'md',
    name,
    rows = 4,
}) => {
    const {
        paddingX,
        paddingY,
        fontSize,
    } = sizeMap[size];

    return (
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            style={{
                width: '100%',
                resize: 'vertical',
                padding: `${paddingY} ${paddingX}`,
                fontSize,
                lineHeight: '1.5',
                border: `1px solid ${colors.neutral.border}`,
                borderRadius: '6px',
                backgroundColor: colors.neutral.background,
                color: colors.text.primary,
                outline: 'none',
                transition: 'all 0.2s ease-in-out',
                opacity: disabled ? 0.5 : 1,
                cursor: disabled ? 'not-allowed' : 'text',
            }}
        />
    );
};
