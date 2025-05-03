import React from 'react';
import { colors } from '@/tokens/theme/colors/colors';
import { sizeMap } from '@utils/sizemap';

export interface SwitchProps {
    checked: boolean;
    onChange: () => void;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

export const Switch = ({
    checked,
    onChange,
    disabled = false,
    size = 'md',
}: SwitchProps) => {
    const dimensions = sizeMap[size]?.switch ?? { width: '40px', height: '20px' };

    return (
        <label
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                cursor: disabled ? 'not-allowed' : 'pointer',
                opacity: disabled ? 0.5 : 1,
            }}
        >
            <span
                style={{
                    width: dimensions.width,
                    height: dimensions.height,
                    backgroundColor: checked ? colors.control.default : colors.control.disabled,
                    border: `1px solid ${colors.control.default}`,
                    borderRadius: '999px',
                    position: 'relative',
                    transition: 'background-color 0.2s ease-in-out',
                }}
            >
                <span
                    style={{
                        width: '50%',
                        height: '100%',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        position: 'absolute',
                        top: 0,
                        left: checked ? '50%' : '0',
                        transition: 'left 0.2s ease-in-out',
                    }}
                />
            </span>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                style={{ display: 'none' }}
            />
        </label>
    );
};
