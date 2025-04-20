import React from 'react';
import { Checkbox } from '../Checkbox';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Form/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    args: {
        label: 'Acepto los términos y condiciones',
        checked: false,
        disabled: false,
        size: 'md',
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

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
