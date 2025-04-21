import React from 'react';
import { Input, InputProps } from './Input';

export interface InputPasswordProps extends InputProps {
    iconRight?: React.ReactNode;
}

export const InputPassword = ({ iconRight, ...props }: InputPasswordProps) => {
    return (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Input {...props} type="password" />
            {iconRight && (
                <span style={{ position: 'absolute', right: '12px' }}>{iconRight}</span>
            )}
        </div>
    );
};
