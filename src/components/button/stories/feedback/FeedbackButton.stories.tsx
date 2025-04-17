import type { Meta, StoryObj } from '@storybook/react'; // Tipado para definir stories
import { Button } from '@/components/button'; // Importamos nuestro botón base

// Definimos los metadatos del grupo de botones de feedback
const meta: Meta<typeof Button> = {
    title: 'Components/Button/Feedback',// Así aparecerá en el panel izquierdo
    component: Button,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>; // Tipamos las historias

// Variantes de feedback para mostrar distintas señales visuales
export const Success: Story = {
    args: {
        label: 'Success',
        variant: 'success',
        size: 'md',
    },
};

export const Info: Story = {
    args: {
        label: 'Info',
        variant: 'info',
        size: 'md',
    },
};

export const Warning: Story = {
    args: {
        label: 'Warning',
        variant: 'warning',
        size: 'md',
    },
};

export const Danger: Story = {
    args: {
        label: 'Danger',
        variant: 'danger',
        size: 'md',
    },
};
