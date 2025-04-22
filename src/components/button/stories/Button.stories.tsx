import React from 'react';
import { Button, ButtonProps } from '../Button';
import type { Meta, StoryObj } from '@storybook/react';
import { FcGoogle } from 'react-icons/fc';
import { FaArrowRight } from 'react-icons/fa';

const meta: Meta<ButtonProps> = {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Botón base',
        variant: 'primary',
        size: 'md',
        disabled: false,
    },
    argTypes: {
        size: {
            control: { type: 'radio' },
            options: ['sm', 'md', 'lg'],
        },
        variant: {
            control: { type: 'radio' },
            options: ['primary', 'secondary', 'outline'],
        },
    },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const WithIconRight: Story = {
    args: {
        children: (
            <>
                Continuar <FaArrowRight style={{ marginLeft: '8px' }} />
            </>
        ),
    },
};

export const WithIconLeft: Story = {
    args: {
        children: (
            <>
                <FcGoogle style={{ marginRight: '8px' }} /> Continuar con Google
            </>
        ),
    },
};
