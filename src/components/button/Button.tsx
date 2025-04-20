import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { GoogleIcon, ArrowRightIcon } from '@icons';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
};

export const SmallWithIcon: Story = {
  args: {
    size: 'sm',
    children: 'Continuar con Google',
    iconLeft: <GoogleIcon />,
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium',
  },
};

export const MediumWithIcon: Story = {
  args: {
    size: 'md',
    children: 'Continuar con Google',
    iconLeft: <GoogleIcon />,
  },
};

export const MediumRightIcon: Story = {
  args: {
    size: 'md',
    children: 'Continuar con Google',
    iconRight: <ArrowRightIcon />,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
};

export const LargeWithIcon: Story = {
  args: {
    size: 'lg',
    children: 'Continuar con Google',
    iconLeft: <GoogleIcon />,
  },
};

export const WithLeftAndRightIcon: Story = {
  args: {
    size: 'lg',
    children: 'Both Icons',
    iconLeft: <GoogleIcon />,
    iconRight: <ArrowRightIcon />,
  },
};

export const Disabled: Story = {
  args: {
    size: 'md',
    variant: 'secondary',
    disabled: true,
    children: 'Disabled',
  },
};
