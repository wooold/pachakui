import './Select.css';

export type Option = {
    label: string;
    value: string;
};

export type SelectProps = {
    label?: string;
    options: Option[];
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
};

export const Select = ({
    label,
    options,
    value,
    onChange,
    disabled = false,
}: SelectProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className="pachakui-select-wrapper">
            {label && <label className="pachakui-label">{label}</label>}
            <select
                className="pachakui-select"
                value={value}
                onChange={handleChange}
                disabled={disabled}
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
