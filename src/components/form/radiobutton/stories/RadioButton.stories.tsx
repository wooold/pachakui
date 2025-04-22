import React from 'react';
import { RadioButton, RadioButtonProps } from '../RadioButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<RadioButtonProps> = {
    title: 'Form/RadioButton',
    component: RadioButton,
    args: {
        label: 'Opción A',
        name: 'grupo1',
        value: 'a',
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

type Story = StoryObj<RadioButtonProps>;

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
