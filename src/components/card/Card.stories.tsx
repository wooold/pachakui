import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
    title: 'Components/Display/Card',
    component: Card,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        children: 'Este es un card con padding por defecto y sombra media.',
    },
};

export const WithPaddingAndShadow: Story = {
    args: {
        children: 'Card personalizado con padding xl y sombra xl.',
        padding: 'xl',
        shadow: 'xl',
    },
};

export const Colored: Story = {
    args: {
        children: 'Card con fondo gris suave y sombra ligera.',
        backgroundColor: '#f3f4f6', // un gris muy claro (opcional usar token si se define)
        shadow: 'sm',
    },
};
