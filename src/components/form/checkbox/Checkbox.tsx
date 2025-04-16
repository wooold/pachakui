import './Checkbox.css';

export type CheckboxProps = {
    id?: string;
    label: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
};

export const Checkbox = ({
    label,
    checked = false,
    disabled = false,
    onChange,
}: CheckboxProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.checked);
    };

    return (
        <label className="pachakui-checkbox">
            <input
                type="checkbox"
                checked={checked}
                disabled={disabled}
                onChange={handleChange}
            />
            <span>{label}</span>
        </label>
    );
};