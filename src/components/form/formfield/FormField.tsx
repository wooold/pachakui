import { ReactNode } from 'react';
import { typography, colors, spacing } from '@/tokens';

type FormFieldProps = {
    label?: string;
    hint?: string;
    error?: string;
    children: ReactNode;
    id?: string;
};

export const FormField = ({ label, hint, error, children, id }: FormFieldProps) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xs }}>
            {label && (
                <label
                    htmlFor={id}
                    style={{
                        fontSize: typography.fontSize.sm,
                        fontWeight: typography.fontWeight.medium,
                        color: colors.text.primary,
                    }}
                >
                    {label}
                </label>
            )}

            {children}

            {hint && !error && (
                <span
                    style={{
                        fontSize: typography.fontSize.sm,
                        color: colors.text.muted,
                    }}
                >
                    {hint}
                </span>
            )}

            {error && (
                <span
                    style={{
                        fontSize: typography.fontSize.sm,
                        color: colors.feedback.error,
                    }}
                >
                    {error}
                </span>
            )}
        </div>
    );
};
