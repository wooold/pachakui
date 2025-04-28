// 📁 src/components/button/stories/Button.stories.tsx

import React from 'react';
import { Button, ButtonProps } from '../Button';
import type { Meta, StoryObj } from '@storybook/react';
import { Lock, ArrowRight } from 'lucide-react'; // 🎯 Importamos íconos reales de lucide-react

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Botón Base',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    iconLeft: { control: false }, // 🎯 No editable desde UI
    iconRight: { control: false }, // 🎯 No editable desde UI
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

/**
 * 🚀 Botón por defecto
 */
export const Default: Story = {};

/**
 * 👆 Hover
 */
export const Hover: Story = {
  args: {
    children: 'Hover manual',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

/**
 * 🔵 Focus
 */
export const Focus: Story = {
  args: {
    children: 'Focus manual',
  },
  parameters: {
    pseudo: { focus: true },
  },
};

/**
 * 🎯 Active
 */
export const Active: Story = {
  args: {
    children: 'Active manual',
  },
  parameters: {
    pseudo: { active: true },
  },
};

/**
 * 🔒 Botón deshabilitado
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/**
 * ⏳ Botón en loading
 */
export const Loading: Story = {
  args: {
    loading: true,
    children: 'Cargando...',
  },
};

/**
 * 🟦 Variante Secondary
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Botón Secundario',
    loading: false,
  },
};

/**
 * 🔒 Botón con ícono a la izquierda
 */
export const WithIconLeft: Story = {
  args: {
    children: 'Iniciar sesión',
    iconLeft: Lock, // 🎯 Icono a la izquierda oficial
  },
};

/**
 * ➡️ Botón con ícono a la derecha
 */
export const WithIconRight: Story = {
  args: {
    children: 'Continuar',
    iconRight: ArrowRight, // 🎯 Ahora usamos el icono oficial
  },
};
