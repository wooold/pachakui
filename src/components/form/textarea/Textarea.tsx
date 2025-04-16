import './Textarea.css';

export type TextareaProps = {
    id?: string;
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    disabled?: boolean;
};

export const Textarea = ({
    id,
    label,
    placeholder = '',
    value,
    onChange,
    disabled = false,
}: TextareaProps) => {
    return (
        <div className="pachakui-textarea-wrapper">
            {label && (
                <label htmlFor={id} className="pachakui-label">
                    {label}
                </label>
            )}
            <textarea
                id={id}
                className="pachakui-textarea"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                rows={4}
            />
        </div>
    );
};
