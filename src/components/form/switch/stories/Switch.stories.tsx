import React from 'react';
import { Switch, SwitchProps } from '../Switch';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<SwitchProps> = {
    title: 'Form/Switch',
    component: Switch,
    args: {
        checked: false,
        disabled: false,
        size: 'md',
        onChange: () => { },
    },
    argTypes: {
        size: {
            control: { type: 'radio' },
            options: ['sm', 'md', 'lg'],
        },
    },
};

export default meta;

type Story = StoryObj<SwitchProps>;

export const Default: Story = {};

export const Enabled: Story = {
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
