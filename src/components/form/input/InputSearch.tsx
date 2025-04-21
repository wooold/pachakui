import React from 'react';
import { Input, InputProps } from './Input';

export interface InputSearchProps extends InputProps {
    iconLeft?: React.ReactNode;
}

export const InputSearch = ({ iconLeft, ...props }: InputSearchProps) => {
    return (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            {iconLeft && (
                <span style={{ position: 'absolute', left: '12px' }}>{iconLeft}</span>
            )}
            <Input {...props} type="search" />
        </div>
    );
};
