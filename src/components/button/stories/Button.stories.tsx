// 📁 src/components/button/stories/Button.stories.tsx

import React from 'react';
import { Button, ButtonProps } from '../Button';
import type { Meta, StoryObj } from '@storybook/react';
import { Lock, ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container'; // ✅ Nuevo
import { Section } from '@/components/layout/Section'; // ✅ Nuevo

const meta: Meta<ButtonProps> = {
  title: 'Components/Buttons/Buttons',
  component: Button,
  args: {
    children: 'Botón Base',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  },
  argTypes: {
    variant: { control: { type: 'radio' }, options: ['primary', 'secondary'] },
    size: { control: { type: 'radio' }, options: ['sm', 'md', 'lg'] },
    disabled: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
    iconLeft: { control: false },
    iconRight: { control: false },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

/* 🔵 Story principal */
export const Default: Story = {
  render: (args) => (
    <Container>
      <Section title="Default">
        <Button {...args} />
      </Section>
    </Container>
  ),
};

/* 🔵 Hover manual */
export const Hover: Story = {
  render: (args) => (
    <Container>
      <Section title="Hover">
        <Button {...args} />
      </Section>
    </Container>
  ),
  args: { children: 'Hover manual' },
  parameters: { pseudo: { hover: true } },
};

/* 🔵 Focus manual */
export const Focus: Story = {
  render: (args) => (
    <Container>
      <Section title="Focus">
        <Button {...args} />
      </Section>
    </Container>
  ),
  args: { children: 'Focus manual' },
  parameters: { pseudo: { focus: true } },
};

/* 🔵 Active manual */
export const Active: Story = {
  render: (args) => (
    <Container>
      <Section title="Active">
        <Button {...args} />
      </Section>
    </Container>
  ),
  args: { children: 'Active manual' },
  parameters: { pseudo: { active: true } },
};

/* 🔵 Disabled */
export const Disabled: Story = {
  render: (args) => (
    <Container>
      <Section title="Disabled">
        <Button {...args} />
      </Section>
    </Container>
  ),
  args: { disabled: true },
};

/* 🔵 Loading */
export const Loading: Story = {
  render: (args) => (
    <Container>
      <Section title="Loading">
        <Button {...args} />
      </Section>
    </Container>
  ),
  args: { loading: true, children: 'Cargando...' },
};

/* 🔵 Secondary */
export const Secondary: Story = {
  render: (args) => (
    <Container>
      <Section title="Secondary">
        <Button {...args} />
      </Section>
    </Container>
  ),
  args: { variant: 'secondary', children: 'Botón Secundario', loading: false },
};

/* 🔵 Con Icono Izquierdo */
export const WithIconLeft: Story = {
  render: (args) => (
    <Container>
      <Section title="With Icon Left">
        <Button {...args} />
      </Section>
    </Container>
  ),
  args: { children: 'Iniciar sesión', iconLeft: Lock },
};

/* 🔵 Con Icono Derecho */
export const WithIconRight: Story = {
  render: (args) => (
    <Container>
      <Section title="With Icon Right">
        <Button {...args} />
      </Section>
    </Container>
  ),
  args: { children: 'Continuar', iconRight: ArrowRight },
};
