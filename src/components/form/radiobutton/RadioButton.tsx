import './RadioButton.css';

export type RadioButtonProps = {
    label: string;
    name: string;
    value: string;
    checked?: boolean;
    onChange?: (value: string) => void;
};

export const RadioButton = ({
    label,
    name,
    value,
    checked = false,
    onChange,
}: RadioButtonProps) => {
    return (
        <label className="pachakui-radio">
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={() => onChange?.(value)}
            />
            <span>{label}</span>
        </label>
    );
};
