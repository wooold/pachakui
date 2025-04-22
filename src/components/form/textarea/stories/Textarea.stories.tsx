import React from 'react';
import { Textarea, TextareaProps } from '../Textarea';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<TextareaProps> = {
    title: 'Form/Textarea',
    component: Textarea,
    args: {
        value: '',
        placeholder: 'Escribe un mensaje...',
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

type Story = StoryObj<TextareaProps>;

export const Default: Story = {};

export const WithText: Story = {
    args: {
        value: 'Este es un ejemplo de contenido prellenado.',
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
