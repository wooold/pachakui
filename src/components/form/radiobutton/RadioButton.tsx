<<<<<<< Updated upstream
import { colors, spacing, typography } from '@/tokens';
=======
import React from 'react';
import { colors } from '@tokens';
import { sizeMap } from '@utils/sizemap';

type RadioButtonSize = 'sm' | 'md' | 'lg';
>>>>>>> Stashed changes

type RadioButtonProps = {
    label: string;
    name: string;
    value: string;
    checked: boolean;
    onChange?: (value: string) => void;
    disabled?: boolean;
    size?: RadioButtonSize;
};

export const RadioButton = ({
    label,
    name,
    value,
    checked,
    onChange,
    disabled = false,
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
                userSelect: 'none',
            }}
        >
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={() => onChange?.(value)}
                disabled={disabled}
                style={{
<<<<<<< Updated upstream
                    width: '16px',
                    height: '16px',
=======
                    width: radioSize,
                    height: radioSize,
                    borderRadius: '50%',
>>>>>>> Stashed changes
                    accentColor: colors.brand.primary,
                    cursor: disabled ? 'not-allowed' : 'pointer',
                }}
            />
            <span>{label}</span>
        </label>
    );
};
