import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from '../RadioButton';

const meta: Meta<typeof RadioButton> = {
    title: 'Components/Form/RadioButton',
    component: RadioButton,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'changed' },
    },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

<<<<<<< HEAD
export const Small: Story = {
    args: {
        label: 'Opción pequeña',
        value: 'sm',
        size: 'sm',
        name: 'radio-size',
    },
};

export const Medium: Story = {
    args: {
        label: 'Opción mediana',
        value: 'md',
        size: 'md',
        checked: true,
        name: 'radio-size',
    },
};

export const Large: Story = {
    args: {
        label: 'Opción grande',
        value: 'lg',
        size: 'lg',
        name: 'radio-size',
=======
export const Default: Story = {
    args: {
        label: 'Opción A',
        value: 'A',
        name: 'example',
    },
};

export const Checked: Story = {
    args: {
        label: 'Opción seleccionada',
        value: 'B',
        checked: true,
        name: 'example',
>>>>>>> origin/main
    },
};

export const Disabled: Story = {
    args: {
        label: 'No editable',
<<<<<<< HEAD
        value: 'disabled',
        size: 'md',
        checked: true,
        disabled: true,
        name: 'radio-disabled',
=======
        value: 'C',
        checked: true,
        disabled: true,
        name: 'example',
>>>>>>> origin/main
    },
};
