import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from '../FormField';
import { Input } from '../../input/Input';
import { InputPassword } from '../../input/InputPassword';
import { Select } from '../../select/Select';
import { Textarea } from '../../textarea/Textarea';

const meta: Meta = {
    title: 'Form/FormField',
    component: FormField,
};

export default meta;

type Story = StoryObj;

export const InputField: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return (
            <FormField label="Nombre">
                <Input
                    placeholder="Escribe tu nombre"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </FormField>
        );
    },
};

export const PasswordField: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return (
            <FormField label="Contraseña">
                <InputPassword
                    placeholder="••••••••"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </FormField>
        );
    },
};

export const SelectField: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return (
            <FormField label="País">
                <Select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    options={[
                        { value: 'pe', label: 'Perú' },
                        { value: 'ar', label: 'Argentina' },
                        { value: 'co', label: 'Colombia' },
                    ]}
                />
            </FormField>
        );
    },
};

export const TextareaField: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return (
            <FormField label="Mensaje">
                <Textarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Deja tu comentario"
                />
            </FormField>
        );
    },
};
