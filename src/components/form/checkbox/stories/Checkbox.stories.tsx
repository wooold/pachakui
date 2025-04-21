import React from 'react';
import { Checkbox, CheckboxProps } from '../Checkbox';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<CheckboxProps> = {
    title: 'Form/Checkbox',
    component: Checkbox,
    args: {
        label: 'Aceptar términos',
        checked: false,
        disabled: false,
        size: 'md',
    },
    argTypes: {
        size: {
            control: { type: 'radio' },
            options: ['sm', 'md', 'lg'],
        },
    },
};

export default meta;

type Story = StoryObj<CheckboxProps>;

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

export const Large: Story = {
    args: {
        size: 'lg',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
    },
};
