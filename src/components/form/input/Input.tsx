import { ChangeEvent } from 'react';
import { colors, spacing, typography, borders } from '@/tokens';

type InputProps = {
    id?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
};

export const Input = ({
    id,
    value,
    onChange,
    placeholder = '',
    disabled = false,
}: InputProps) => {
    return (
        <input
            id={id}
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
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
                outline: 'none',
                transition: 'border-color 0.2s ease-in-out',
            }}
        />
    );
};
