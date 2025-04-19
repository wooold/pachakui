import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../Button';
import { FcGoogle } from 'react-icons/fc';
import { FaArrowRight } from 'react-icons/fa';

const meta: Meta<typeof Button> = {
    title: 'Components/Button/Action',
    component: Button,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

// 🔹 Variante base primaria
export const Primary: Story = {
    args: {
        label: 'Continuar',
        variant: 'primary',
        size: 'md',
    },
};

// 🔹 Variante secundaria simple
export const Secondary: Story = {
    args: {
        label: 'Continuar con Google',
        variant: 'secondary',
        size: 'md',
    },
};

// 🔹 Botón con ícono a la izquierda (ideal para login social)
export const WithLeftIcon: Story = {
    args: {
        label: 'Continuar con Google',
        variant: 'secondary',
        size: 'md',
        iconLeft: <FcGoogle />, // Usa el ícono de Google
    },
};

// 🔹 Botón con ícono a la derecha (por ejemplo: navegación)
export const WithRightIcon: Story = {
    args: {
        label: 'Siguiente',
        variant: 'primary',
        size: 'md',
        iconRight: <FaArrowRight />, // Usa una flecha para avanzar
    },
};
