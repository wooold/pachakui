import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from '../FormField';
import { Input } from '@/components/form/input';
import { Select } from '@/components/form/select';
import { Textarea } from '@/components/form/textarea';
import { InputPassword } from '@/components/form/input';

const meta: Meta<typeof FormField> = {
    title: 'Components/Form/FormField',
    component: FormField,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const WithInput: Story = {
    render: () => (
        <FormField label="Nombre" hint="Este campo es obligatorio">
            <Input placeholder="Escribe tu nombre" />
        </FormField>
    ),
};

export const WithPassword: Story = {
    render: () => (
        <FormField label="Contraseña" required error="Debe tener al menos 8 caracteres">
            <InputPassword placeholder="Contraseña" />
        </FormField>
    ),
};

export const WithSelect: Story = {
    render: () => (
        <FormField label="Fruta favorita">
            <Select
                placeholder="Selecciona una opción"
                options={[
                    { value: 'apple', label: '🍎 Apple' },
                    { value: 'banana', label: '🍌 Banana' },
                    { value: 'cherry', label: '🍒 Cherry' },
                ]}
            />
        </FormField>
    ),
};

export const WithTextarea: Story = {
    render: () => (
        <FormField label="Comentario" hint="Sé respetuoso, por favor">
            <Textarea placeholder="Escribe algo..." />
        </FormField>
    ),
};
