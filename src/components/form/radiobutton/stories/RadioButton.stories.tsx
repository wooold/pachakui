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
    },
};

export const Disabled: Story = {
    args: {
        label: 'No editable',
        value: 'disabled',
        size: 'md',
        checked: true,
        disabled: true,
        name: 'radio-disabled',
    },
};
