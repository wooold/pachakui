<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import React from 'react';
>>>>>>> origin/main
import { colors, spacing, typography } from '@/tokens';
=======
import React from 'react';
import { colors } from '@tokens';
import { sizeMap } from '@utils/sizemap';

type RadioButtonSize = 'sm' | 'md' | 'lg';
>>>>>>> Stashed changes

type RadioButtonProps = {
    label?: string;
    value: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    disabled?: boolean;
    size?: RadioButtonSize;
};

export const RadioButton: React.FC<RadioButtonProps> = ({
    label,
    value,
    checked = false,
    onChange,
    name,
    disabled = false,
<<<<<<< HEAD
<<<<<<< Updated upstream
}: RadioButtonProps) => {
=======
    size = 'md',
}) => {
    const {
        fontSize,
        icon: radioSize,
        gap,
    } = sizeMap[size];

    const radioId = React.useId();

>>>>>>> Stashed changes
=======
}) => {
    const radioId = React.useId();

>>>>>>> origin/main
    return (
        <label
            htmlFor={radioId}
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
                id={radioId}
                type="radio"
                value={value}
                checked={checked}
                onChange={onChange}
                name={name}
                disabled={disabled}
                style={{
<<<<<<< Updated upstream
                    width: '16px',
                    height: '16px',
<<<<<<< HEAD
=======
                    width: radioSize,
                    height: radioSize,
                    borderRadius: '50%',
>>>>>>> Stashed changes
=======
                    borderRadius: '50%',
>>>>>>> origin/main
                    accentColor: colors.brand.primary,
                    cursor: disabled ? 'not-allowed' : 'pointer',
                }}
            />
            {label}
        </label>
    );
};
