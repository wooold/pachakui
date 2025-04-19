// ActionButton.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../Button'; // Importa el componente base del botón
import { FcGoogle } from 'react-icons/fc';
import { FaArrowRight } from 'react-icons/fa6';

// 🧭 Configuración base para Storybook
const meta: Meta<typeof Button> = {
    title: 'Components/Button/Action',
    component: Button,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

// 🌟 Variante Primary (visual: fondo sólido)
export const Primary: Story = {
    args: {
        label: 'Continuar',
        variant: 'primary',
        size: 'md',
    },
};

// ✨ Variante Secondary (visual: blanco con borde)
export const Secondary: Story = {
    args: {
        label: 'Continuar con Google',
        variant: 'secondary',
        size: 'md',
        iconLeft: <FcGoogle />,
    },
};

// 🫥 Variante Ghost (visual: sin fondo, solo texto con borde transparente)
export const Ghost: Story = {
    args: {
        label: 'Omitir',
        variant: 'ghost',
        size: 'md',
    },
};

// 👉 Primary con ícono a la derecha
export const WithRightIcon: Story = {
    args: {
        label: 'Siguiente',
        variant: 'primary',
        size: 'md',
        iconRight: <FaArrowRight />,
    },
};

// 👈 Secondary con ícono a la izquierda
export const WithLeftIcon: Story = {
    args: {
        label: 'Continuar con Google',
        variant: 'secondary',
        size: 'md',
        iconLeft: <FcGoogle />,
    },
};
