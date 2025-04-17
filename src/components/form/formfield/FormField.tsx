export * from './FormField';
// src/components/form/formfield/FormField.tsx
import './FormField.css';

export type FormFieldProps = {
    label?: string;
    hint?: string;
    error?: string;
    children: React.ReactNode;
};

export const FormField = ({ label, hint, error, children }: FormFieldProps) => {
    return (
        <div className="pachakui-form-field">
            {label && <label className="pachakui-form-label">{label}</label>}
            {children}
            {error ? (
                <div className="pachakui-form-error">{error}</div>
            ) : (
                hint && <div className="pachakui-form-hint">{hint}</div>
            )}
        </div>
    );
};
