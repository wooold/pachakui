import './Select.css';

// Tipo para cada opción del dropdown
export type Option = {
    label: string;
    value: string;
};

// Props del componente Select
export type SelectProps = {
    options: Option[];
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
};

// El componente ya no renderiza <label>, eso lo hará FormField
export const Select = ({
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
