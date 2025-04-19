import React from 'react';
import { colors, spacing, borders, typography, shadows } from '@/tokens';

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

const sizeMap: Record<TextareaSize, {
    paddingY: string;
    paddingX: string;
    fontSize: string;
}> = {
    sm: {
        paddingY: spacing.sm,
        paddingX: spacing.md,
        fontSize: typography.fontSize.sm,
    },
    md: {
        paddingY: spacing.md,
        paddingX: spacing.mdPlus,
        fontSize: typography.fontSize.base,
    },
    lg: {
        paddingY: spacing.mdPlus,
        paddingX: spacing.lg,
        fontSize: typography.fontSize.lg,
    },
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
    const { paddingY, paddingX, fontSize } = sizeMap[size];

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
                lineHeight: typography.lineHeight.base,
                border: `1px solid ${colors.neutral.border}`,
                borderRadius: borders.radius.md,
                backgroundColor: colors.background.base,
                color: colors.text.primary,
                outline: 'none',
                transition: 'all 0.2s ease-in-out',
                opacity: disabled ? 0.5 : 1,
                cursor: disabled ? 'not-allowed' : 'text',
            }}
        />
    );
};
