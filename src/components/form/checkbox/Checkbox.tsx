<<<<<<< Updated upstream
import { colors, spacing, typography } from '@/tokens';
=======
import React from 'react';
import { colors } from '@tokens';
import { sizeMap } from '@utils/sizemap';

type CheckboxSize = 'sm' | 'md' | 'lg';
>>>>>>> Stashed changes

type CheckboxProps = {
    label: string;
    checked: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
<<<<<<< Updated upstream
=======
    name?: string;
    size?: CheckboxSize;
>>>>>>> Stashed changes
};

export const Checkbox = ({
    label,
    checked,
    onChange,
    disabled = false,
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
    return (
        <label
            style={{
                display: 'flex',
                alignItems: 'center',
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
                cursor: disabled ? 'not-allowed' : 'pointer',
            }}
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange?.(e.target.checked)}
                disabled={disabled}
                style={{
<<<<<<< Updated upstream
                    width: '16px',
                    height: '16px',
=======
                    width: checkboxSize,
                    height: checkboxSize,
                    border: `1px solid ${colors.neutral.border}`,
                    borderRadius: '4px',
>>>>>>> Stashed changes
                    accentColor: colors.brand.primary,
                    cursor: disabled ? 'not-allowed' : 'pointer',
                }}
            />
            <span>{label}</span>
        </label>
    );
};
