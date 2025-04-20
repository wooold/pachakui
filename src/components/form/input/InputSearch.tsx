import React from 'react';
import { Input } from './Input';
import { FiSearch } from 'react-icons/fi';

type InputSearchProps = Omit<React.ComponentProps<typeof Input>, 'type' | 'iconLeft'>;

export const InputSearch: React.FC<InputSearchProps> = (props) => {
    return (
        <Input
            {...props}
            type="search"
            iconLeft={<FiSearch />}
            role="searchbox"
            aria-label="Buscar"
        />
    );
};
