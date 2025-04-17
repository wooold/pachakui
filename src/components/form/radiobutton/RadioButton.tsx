import './RadioButton.css';

export type RadioButtonProps = {
    id?: string;
    name: string;
    label: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (value: string) => void;
};

export const RadioButton = ({
    id,
    name,
    label,
    value,
    checked = false,
    disabled = false,
    onChange,
}: RadioButtonProps) => {
    const generatedId = id || `radio-${name}-${value}`;

    return (
        <label className="pachakui-radio">
            <input
                type="radio"
                id={generatedId}
                name={name}
                value={value}
                checked={checked}
                onChange={() => onChange?.(value)}
                disabled={disabled}
            />
            <span>{label}</span>
        </label>
    );
};
