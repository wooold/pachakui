import './Input.css';

export type InputProps = {
    id?: string;
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
    id,
    label,
    placeholder = '',
    value,
    onChange,
}: InputProps) => {
    return (
        <div className="pachakui-input-wrapper">
            {label && (
                <label htmlFor={id} className="pachakui-label">
                    {label}
                </label>
            )}
            <input
                id={id}
                className="pachakui-input"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};
