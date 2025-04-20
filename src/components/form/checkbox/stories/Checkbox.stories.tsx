import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Form/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'toggled' },
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Small: Story = {
    args: {
        label: 'Opción pequeña',
        size: 'sm',
        checked: false,
    },
};

export const Medium: Story = {
    args: {
        label: 'Opción mediana',
        size: 'md',
        checked: true,
    },
};

export const Large: Story = {
    args: {
        label: 'Opción grande',
        size: 'lg',
        checked: false,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Deshabilitado',
        size: 'md',
        checked: true,
        disabled: true,
    },
};
