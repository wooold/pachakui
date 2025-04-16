import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        children: <p>Este es el contenido de una tarjeta simple.</p>,
    },
};

export const WithOptions: Story = {
    args: {
        children: <p>Card con sombra grande, padding grande y borde</p>,
        shadow: 'lg',
        padding: 'lg',
        bordered: true,
    },
};
