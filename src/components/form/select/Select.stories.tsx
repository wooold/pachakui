import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'Components/Form/Select',
    component: Select,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        label: 'Color de conexión',
        options: [
            { label: 'Azul', value: 'blue' },
            { label: 'Rojo', value: 'red' },
            { label: 'Verde', value: 'green' },
        ],
        value: 'blue',
    },
};
