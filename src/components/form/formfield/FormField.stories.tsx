import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';
import { Input } from '../input/Input';

const meta: Meta<typeof FormField> = {
    title: 'Components/Form/FormField',
    component: FormField,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
    render: () => {
        const [email, setEmail] = useState('');

        return (
            <FormField
                label="Correo electrónico"
                hint="Usa tu cuenta institucional"
                id="email"
            >
                <Input value={email} onChange={setEmail} placeholder="tucorreo@ejemplo.com" />
            </FormField>
        );
    },
};

export const WithError: Story = {
    render: () => {
        const [email, setEmail] = useState('');

        return (
            <FormField
                label="Correo electrónico"
                error="Este campo es obligatorio"
                id="email"
            >
                <Input value={email} onChange={setEmail} placeholder="tucorreo@ejemplo.com" />
            </FormField>
        );
    },
};
