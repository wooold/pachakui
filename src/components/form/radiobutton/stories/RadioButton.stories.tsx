import React from 'react';
import { RadioButton } from '../RadioButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RadioButton> = {
    title: 'Components/Form/RadioButton',
    component: RadioButton,
    tags: ['autodocs'],
    args: {
        label: 'Opción seleccionable',
        value: 'option-1',
        checked: false,
        disabled: false,
        size: 'md',
        name: 'grupo-demo',
    },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {};

export const Checked: Story = {
    args: {
        checked: true,
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
    },
};
