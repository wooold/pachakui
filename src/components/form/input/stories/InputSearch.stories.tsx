import type { Meta, StoryObj } from '@storybook/react';
import { InputSearch } from '../InputSearch';
import { InputProps } from '../Input';

const meta: Meta<InputProps> = {
    title: 'Form/InputSearch',
    component: InputSearch,
    args: {
        value: '',
        placeholder: 'Buscar productos, categorías...',
        size: 'md',
        onChange: () => { },
        disabled: false,
    },
    argTypes: {
        size: {
            control: 'radio',
            options: ['sm', 'md', 'lg'],
        },
    },
};

export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {};

export const WithValue: Story = {
    args: {
        value: 'zapatos',
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
