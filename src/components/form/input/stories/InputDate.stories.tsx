import type { Meta, StoryObj } from '@storybook/react';
import { InputDate } from '../InputDate';
import { InputProps } from '../Input';

const meta: Meta<InputProps> = {
    title: 'Form/InputDate',
    component: InputDate,
    args: {
        value: '',
        placeholder: 'Selecciona una fecha',
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
        value: '2025-05-01',
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
