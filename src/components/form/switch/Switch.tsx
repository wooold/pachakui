import { colors, spacing, borders } from '@/tokens';

type SwitchProps = {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
};

export const Switch = ({ checked = false, onChange, label }: SwitchProps) => {
    return (
        <label
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing.sm,
                cursor: 'pointer',
                fontSize: '14px',
                userSelect: 'none',
            }}
        >
            <div
                style={{
                    position: 'relative',
                    width: '36px',
                    height: '20px',
                    backgroundColor: checked ? colors.brand.primary : colors.neutral.border,
                    borderRadius: borders.radius.full,
                    transition: 'background-color 0.2s ease-in-out',
                }}
            >
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange?.(e.target.checked)}
                    style={{
                        opacity: 0,
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        cursor: 'pointer',
                    }}
                />
                <span
                    style={{
                        position: 'absolute',
                        top: '2px',
                        left: checked ? '18px' : '2px',
                        width: '16px',
                        height: '16px',
                        borderRadius: borders.radius.full,
                        backgroundColor: '#fff',
                        transition: 'left 0.2s ease-in-out',
                    }}
                />
            </div>
            {label && <span>{label}</span>}
        </label>
    );
};
