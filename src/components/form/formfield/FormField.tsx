import React from 'react';
import { typography, spacing, colors } from '@/tokens';

type FormFieldProps = {
    label?: string;
    hint?: string;
    error?: string;
    required?: boolean;
    children: React.ReactNode;
};

export const FormField: React.FC<FormFieldProps> = ({
    label,
    hint,
    error,
    required = false,
    children,
}) => {
    const fieldId = React.useId();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xs }}>
            {label && (
                <label
                    htmlFor={fieldId}
                    style={{
                        fontSize: typography.fontSize.sm, // 14px
                        fontWeight: typography.fontWeight.medium,
                        color: colors.text.primary,
                    }}
                >
                    {label} {required && <span style={{ color: colors.feedback.error }}>*</span>}
                </label>
            )}

            {/* Componente de entrada */}
            <div>{children}</div>

            {/* Hint o Error */}
            {error ? (
                <p
                    style={{
                        fontSize: typography.fontSize.sm,
                        color: colors.feedback.error,
                        marginTop: spacing.xs,
                    }}
                >
                    {error}
                </p>
            ) : hint ? (
                <p
                    style={{
                        fontSize: typography.fontSize.sm,
                        color: colors.text.muted,
                        marginTop: spacing.xs,
                    }}
                >
                    {hint}
                </p>
            ) : null}
        </div>
    );
};
