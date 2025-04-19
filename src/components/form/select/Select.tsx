import { ChangeEvent } from 'react';
import { colors, spacing, typography, borders } from '@/tokens';

type Option = {
    label: string;
    value: string;
};

type SelectProps = {
    id?: string;
    value: string;
    onChange: (value: string) => void;
    options: Option[];
    disabled?: boolean;
};

export const Select = ({
    id,
    value,
    onChange,
    options,
    disabled = false,
}: SelectProps) => {
    return (
        <select
            id={id}
            value={value}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
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
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
