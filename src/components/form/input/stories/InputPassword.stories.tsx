import type { Meta, StoryObj } from '@storybook/react';
import { InputPassword } from '../InputPassword';

const meta: Meta<typeof InputPassword> = {
    title: 'Components/Form/Input/Password',
    component: InputPassword,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputPassword>;

export const Default: Story = {
    args: {
        placeholder: 'Ingresa tu contraseña',
        size: 'md',
    },
};
