import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../Select';

const meta: Meta<typeof Select> = {
    title: 'Components/Form/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'changed' },
    },
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
    { value: 'apple', label: '🍎 Apple' },
    { value: 'banana', label: '🍌 Banana' },
    { value: 'cherry', label: '🍒 Cherry' },
];

export const Small: Story = {
    args: {
        options,
        size: 'sm',
        placeholder: 'Selecciona una fruta',
    },
};

export const Medium: Story = {
    args: {
        options,
        size: 'md',
        placeholder: 'Selecciona una fruta',
    },
};

export const Large: Story = {
    args: {
        options,
        size: 'lg',
        placeholder: 'Selecciona una fruta',
    },
};

export const Disabled: Story = {
    args: {
        options,
        size: 'md',
        placeholder: 'Fruta deshabilitada',
        disabled: true,
    },
};
