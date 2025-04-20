<<<<<<< HEAD
<<<<<<< Updated upstream
import { ChangeEvent } from 'react';
import { colors, spacing, typography, borders } from '@/tokens';
=======
import React from 'react';
import { colors } from '@tokens';
import { sizeMap } from '@utils/sizemap';

type TextareaSize = 'sm' | 'md' | 'lg';
>>>>>>> Stashed changes
=======
import React from 'react';
import { colors, spacing, borders, typography, shadows } from '@/tokens';

type TextareaSize = 'sm' | 'md' | 'lg';
>>>>>>> origin/main

type TextareaProps = {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    size?: TextareaSize;
    name?: string;
    rows?: number;
};

<<<<<<< HEAD
<<<<<<< Updated upstream
export const Textarea = ({
    id,
=======
export const Textarea: React.FC<TextareaProps> = ({
>>>>>>> Stashed changes
=======
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
>>>>>>> origin/main
    value,
    onChange,
    placeholder,
    disabled = false,
    size = 'md',
    name,
    rows = 4,
<<<<<<< HEAD
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
=======
}) => {
    const { paddingY, paddingX, fontSize } = sizeMap[size];

>>>>>>> origin/main
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
<<<<<<< HEAD
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
=======
                resize: 'vertical',
                padding: `${paddingY} ${paddingX}`,
                fontSize,
                lineHeight: typography.lineHeight.base,
                border: `1px solid ${colors.neutral.border}`,
                borderRadius: borders.radius.md,
                backgroundColor: colors.background.base,
                color: colors.text.primary,
>>>>>>> origin/main
                outline: 'none',
                transition: 'all 0.2s ease-in-out',
                opacity: disabled ? 0.5 : 1,
                cursor: disabled ? 'not-allowed' : 'text',
            }}
        />
    );
};
