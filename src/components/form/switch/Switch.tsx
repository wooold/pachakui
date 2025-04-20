import React from 'react';
import { colors } from '@tokens';
import { sizeMap } from '@utils/sizemap';

type SwitchSize = 'sm' | 'md' | 'lg';

type SwitchProps = {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    name?: string;
    size?: SwitchSize;
};

export const Switch: React.FC<SwitchProps> = ({
    checked,
    onChange,
    disabled = false,
    name,
    size = 'md',
}) => {
    const { width, height } = sizeMap[size].switch;
    const knob = sizeMap[size].icon;

    const id = React.useId();

    return (
        <label
            htmlFor={id}
            style={{
                position: 'relative',
                display: 'inline-block',
                width,
                height,
                backgroundColor: disabled
                    ? colors.control.disabled
                    : checked
                        ? colors.control.on
                        : colors.control.off,
                borderRadius: '9999px',
                cursor: disabled ? 'not-allowed' : 'pointer',
                opacity: disabled ? 0.7 : 1,
                transition: 'background-color 0.2s ease-in-out',
            }}
        >
            <input
                id={id}
                name={name}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                style={{ display: 'none' }}
            />
            <span
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: checked ? `calc(100% - ${knob})` : '0',
                    transform: 'translateY(-50%)',
                    width: knob,
                    height: knob,
                    backgroundColor: colors.control.knob,
                    borderRadius: '9999px',
                    transition: 'left 0.2s ease-in-out',
                }}
            />
        </label>
    );
};
