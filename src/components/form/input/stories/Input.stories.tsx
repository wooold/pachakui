import React from 'react';
import { Input, InputProps } from '../Input';
import type { Meta, StoryObj } from '@storybook/react';
import { FiSearch, FiEye } from 'react-icons/fi';

const meta: Meta<InputProps> = {
    title: 'Form/Input',
    component: Input,
    args: {
        value: '',
        placeholder: 'Escribe aquí',
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

type Story = StoryObj<InputProps>;

export const Default: Story = {};

export const WithIconLeft: Story = {
    args: {
        iconLeft: <FiSearch />,
    },
};

export const WithIconRight: Story = {
    args: {
        iconRight: <FiEye />,
    },
};

export const WithBothIcons: Story = {
    args: {
        iconLeft: <FiSearch />,
        iconRight: <FiEye />,
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
