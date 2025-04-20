import React, { useState } from 'react';
import { Input } from './Input';
import { FiEye, FiEyeOff } from 'react-icons/fi';

type InputPasswordProps = Omit<React.ComponentProps<typeof Input>, 'type' | 'iconRight'>;

export const InputPassword: React.FC<InputPasswordProps> = (props) => {
    const [visible, setVisible] = useState(false);

    return (
        <Input
            {...props}
            type={visible ? 'text' : 'password'}
            iconRight={
                <span
                    onClick={() => setVisible((v) => !v)}
                    style={{ cursor: 'pointer' }}
                >
                    {visible ? <FiEyeOff /> : <FiEye />}
                </span>
            }
        />
    );
};
