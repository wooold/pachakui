import './Switch.css';

export type SwitchProps = {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
};

export const Switch = ({ checked = false, onChange, label }: SwitchProps) => {
    return (
        <label className="pachakui-switch">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange?.(e.target.checked)}
            />
            <span className="slider" />
            {label && <span className="switch-label">{label}</span>}
        </label>
    );
};
