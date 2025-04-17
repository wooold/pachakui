import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'Components/Form/Input',
    component: Input,
    tags: ['autodocs'],
    args: {
        id: 'example-input',
        placeholder: 'Ingresa tu nombre',
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
