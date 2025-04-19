import { colors, spacing, typography } from '@/tokens';

type CheckboxProps = {
    label: string;
    checked: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
};

export const Checkbox = ({
    label,
    checked,
    onChange,
    disabled = false,
}: CheckboxProps) => {
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
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange?.(e.target.checked)}
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
