import './Checkbox.css';

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
        <label className="checkbox-container">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange?.(e.target.checked)}
                disabled={disabled}
            />
            <span>{label}</span>
        </label>
    );
};
