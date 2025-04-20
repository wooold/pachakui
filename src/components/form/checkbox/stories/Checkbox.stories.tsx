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

<<<<<<< HEAD
export const Small: Story = {
    args: {
        label: 'Opción pequeña',
        size: 'sm',
=======
export const Default: Story = {
    args: {
        label: 'Acepto los términos',
>>>>>>> origin/main
        checked: false,
    },
};

<<<<<<< HEAD
export const Medium: Story = {
    args: {
        label: 'Opción mediana',
        size: 'md',
=======
export const Checked: Story = {
    args: {
        label: 'Estoy de acuerdo',
>>>>>>> origin/main
        checked: true,
    },
};

<<<<<<< HEAD
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
=======
export const Disabled: Story = {
    args: {
        label: 'No editable',
>>>>>>> origin/main
        checked: true,
        disabled: true,
    },
};
