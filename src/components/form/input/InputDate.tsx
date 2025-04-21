import React from 'react';
import { Input, InputProps } from './Input';

export const InputDate = (props: InputProps) => {
    return <Input {...props} type="date" />;
};
