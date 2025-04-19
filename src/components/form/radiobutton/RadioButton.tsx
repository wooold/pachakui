import { colors, spacing, typography } from '@/tokens';

type RadioButtonProps = {
    label: string;
    name: string;
    value: string;
    checked: boolean;
    onChange?: (value: string) => void;
    disabled?: boolean;
};

export const RadioButton = ({
    label,
    name,
    value,
    checked,
    onChange,
    disabled = false,
}: RadioButtonProps) => {
    return (
        <label
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing.xs,
                fontFamily: typography.fontFamily.base,
                fontSize: typography.fontSize.md,
                color: colors.text.primary,
                cursor: disabled ? 'not-allowed' : 'pointer',
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
                    width: '16px',
                    height: '16px',
                    accentColor: colors.brand.primary,
                    cursor: disabled ? 'not-allowed' : 'pointer',
                }}
            />
            <span>{label}</span>
        </label>
    );
};
