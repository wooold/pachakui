<<<<<<< HEAD
<<<<<<< Updated upstream
import { colors, spacing, typography } from '@/tokens';
=======
import React from 'react';
import { colors } from '@tokens';
import { sizeMap } from '@utils/sizemap';

type CheckboxSize = 'sm' | 'md' | 'lg';
>>>>>>> Stashed changes
=======
import React from 'react';
import { colors, spacing, borders, typography } from '@/tokens';
>>>>>>> origin/main

type CheckboxProps = {
    label?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
    name?: string;
    size?: CheckboxSize;
>>>>>>> Stashed changes
=======
    name?: string;
>>>>>>> origin/main
};

export const Checkbox: React.FC<CheckboxProps> = ({
    label,
    checked = false,
    onChange,
    disabled = false,
<<<<<<< HEAD
<<<<<<< Updated upstream
}: CheckboxProps) => {
=======
    name,
    size = 'md',
}) => {
    const {
        fontSize,
        icon: checkboxSize,
        gap,
    } = sizeMap[size];

    const checkboxId = React.useId();

>>>>>>> Stashed changes
=======
    name,
}) => {
    const checkboxId = React.useId();

>>>>>>> origin/main
    return (
        <label
            htmlFor={checkboxId}
            style={{
                display: 'flex',
                alignItems: 'center',
<<<<<<< HEAD
<<<<<<< Updated upstream
                gap: spacing.xs,
                fontFamily: typography.fontFamily.base,
                fontSize: typography.fontSize.md,
                color: colors.text.primary,
=======
                gap,
                fontSize,
                color: disabled ? colors.text.muted : colors.text.primary,
>>>>>>> Stashed changes
=======
                gap: spacing.sm,
                fontSize: typography.fontSize.base,
                color: disabled ? colors.text.muted : colors.text.primary,
>>>>>>> origin/main
                cursor: disabled ? 'not-allowed' : 'pointer',
                userSelect: 'none',
            }}
        >
            <input
                id={checkboxId}
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                style={{
<<<<<<< Updated upstream
                    width: '16px',
                    height: '16px',
<<<<<<< HEAD
=======
                    width: checkboxSize,
                    height: checkboxSize,
                    border: `1px solid ${colors.neutral.border}`,
                    borderRadius: '4px',
>>>>>>> Stashed changes
=======
                    border: `1px solid ${colors.neutral.border}`,
                    borderRadius: borders.radius.sm,
>>>>>>> origin/main
                    accentColor: colors.brand.primary,
                    cursor: disabled ? 'not-allowed' : 'pointer',
                }}
            />
            {label}
        </label>
    );
};
