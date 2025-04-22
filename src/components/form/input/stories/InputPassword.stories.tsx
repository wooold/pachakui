import React from 'react';
import { InputPassword, InputPasswordProps } from '../InputPassword';
import type { Meta, StoryObj } from '@storybook/react';
import { FiEye } from 'react-icons/fi'; // ✅ reemplazo correcto

const meta: Meta<InputPasswordProps> = {
    title: 'Form/InputPassword',
    component: InputPassword,
    args: {
        value: '',
        placeholder: 'Contraseña',
        disabled: false,
        size: 'md',
        onChange: () => { },
        iconRight: <FiEye />, // ✅ ícono visible
    },
    argTypes: {
        size: {
            control: { type: 'radio' },
            options: ['sm', 'md', 'lg'],
        },
    },
};

export default meta;

type Story = StoryObj<InputPasswordProps>;

export const Default: Story = {};

export const Filled: Story = {
    args: {
        value: 'secreta123',
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
