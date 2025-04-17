// Importamos los tipos necesarios para definir las historias de Storybook.
import type { Meta, StoryObj } from '@storybook/react';

// Importamos el componente base Button desde la ruta correspondiente.
import { Button } from '@/components/button';

// Definimos la configuración general de Storybook para esta historia.
const meta: Meta<typeof Button> = {
    // Nombre que aparecerá en el sidebar de Storybook
    title: 'Components/Button/Action',
    // Componente a documentar
    component: Button,
    // Tags útiles para addons de documentación
    tags: ['autodocs'],
};

export default meta;

// Definimos el tipo base para nuestras historias.
type Story = StoryObj<typeof Button>;

// Cada historia representa una variación del componente Button
export const Primary: Story = {
    args: {
        label: 'Primary',
        variant: 'primary',
        size: 'md',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Secondary',
        variant: 'secondary',
        size: 'md',
    },
};

export const Ghost: Story = {
    args: {
        label: 'Ghost',
        variant: 'ghost',
        size: 'md',
    },
};
