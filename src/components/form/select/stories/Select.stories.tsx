import React from 'react';
import { Select, SelectProps } from '../Select';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<SelectProps> = {
    title: 'Form/Select',
    component: Select,
    args: {
        value: '',
        disabled: false,
        size: 'md',
        onChange: () => { },
        options: [
            { label: 'Opción 1', value: '1' },
            { label: 'Opción 2', value: '2' },
            { label: 'Opción 3', value: '3' },
        ],
    },
    argTypes: {
        size: {
            control: { type: 'radio' },
            options: ['sm', 'md', 'lg'],
        },
    },
};

export default meta;

type Story = StoryObj<SelectProps>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const Preselected: Story = {
    args: {
        value: '2',
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
