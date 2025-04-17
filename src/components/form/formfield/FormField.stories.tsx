import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';
import { Input } from '../input/Input';
import { Select } from '../select/Select';
import { Textarea } from '../textarea/Textarea';

// Configuración de metadata para Storybook
const meta: Meta<typeof FormField> = {
    title: 'Components/Form/FormField', // Aparece dentro de "Components/Form"
    component: FormField,
    tags: ['autodocs'],
};

export default meta;

// Tipo base para cada historia
type Story = StoryObj<typeof FormField>;

// ✅ Historia: Input con hint
export const WithInput: Story = {
    args: {
        label: 'Nombre completo',
        hint: 'Ingresa tu nombre tal como aparece en tu documento',
        children: <Input id="name" placeholder="Ej: Woldito Pachakui" />,
    },
};

// ✅ Historia: Select con hint
export const WithSelect: Story = {
    args: {
        label: 'Color favorito',
        hint: 'Selecciona uno',
        children: (
            <Select
                options={[
                    { label: 'Azul', value: 'blue' },
                    { label: 'Verde', value: 'green' },
                    { label: 'Rojo', value: 'red' },
                ]}
                value="green"
            />
        ),
    },
};

// ✅ Historia: Textarea con hint
export const WithTextarea: Story = {
    args: {
        label: 'Tu historia',
        hint: 'Escríbela con calma, este espacio es solo tuyo',
        children: <Textarea id="historia" placeholder="Aquí comienza tu viaje..." />,
    },
};

// ❌ Historia: Input con error
export const WithError: Story = {
    args: {
        label: 'Correo electrónico',
        error: 'Este campo es obligatorio',
        children: <Input id="email" placeholder="correo@ejemplo.com" />,
    },
};
