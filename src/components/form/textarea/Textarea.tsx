<<<<<<< Updated upstream
import { ChangeEvent } from 'react';
import { colors, spacing, typography, borders } from '@/tokens';
=======
import React from 'react';
import { colors } from '@tokens';
import { sizeMap } from '@utils/sizemap';

type TextareaSize = 'sm' | 'md' | 'lg';
>>>>>>> Stashed changes

type TextareaProps = {
    id?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    rows?: number;
};

<<<<<<< Updated upstream
export const Textarea = ({
    id,
=======
export const Textarea: React.FC<TextareaProps> = ({
>>>>>>> Stashed changes
    value,
    onChange,
    placeholder = '',
    disabled = false,
    rows = 4,
<<<<<<< Updated upstream
}: TextareaProps) => {
=======
}) => {
    const {
        paddingX,
        paddingY,
        fontSize,
    } = sizeMap[size];

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
                resize: 'vertical',
                padding: `${paddingY} ${paddingX}`,
                fontSize,
                lineHeight: '1.5',
                border: `1px solid ${colors.neutral.border}`,
                borderRadius: '6px',
                backgroundColor: colors.neutral.background,
                color: colors.text.primary,
>>>>>>> Stashed changes
                outline: 'none',
                transition: 'border-color 0.2s ease-in-out',
            }}
        />
    );
};
