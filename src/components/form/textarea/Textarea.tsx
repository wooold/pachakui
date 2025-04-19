import { ChangeEvent } from 'react';
import { colors, spacing, typography, borders } from '@/tokens';

type TextareaProps = {
    id?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    rows?: number;
};

export const Textarea = ({
    id,
    value,
    onChange,
    placeholder = '',
    disabled = false,
    rows = 4,
}: TextareaProps) => {
    return (
        <textarea
            id={id}
            value={value}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            style={{
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
                resize: 'vertical',
                outline: 'none',
                transition: 'border-color 0.2s ease-in-out',
            }}
        />
    );
};
