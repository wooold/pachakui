import './Input.css';

export type InputProps = {
    id?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// Este input ahora está 100% limpio y no incluye label interno.
export const Input = ({
    id,
    placeholder = '',
    value,
    onChange,
}: InputProps) => {
    return (
        <div className="pachakui-input-wrapper">
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
