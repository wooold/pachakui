import React from 'react';
import { Input } from './Input';

type InputDateProps = Omit<React.ComponentProps<typeof Input>, 'type'>;

export const InputDate: React.FC<InputDateProps> = (props) => {
    return <Input {...props} type="date" aria-label="Seleccionar fecha" />
};
