// 📁 src/components/button/stories/ButtonToggleTheme.stories.tsx

'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { ButtonToggleTheme } from '../ButtonToggleTheme';

const meta: Meta<typeof ButtonToggleTheme> = {
    title: 'Components/Button/ToggleTheme', // 🎯 Se organiza junto a tus Buttons
    component: ButtonToggleTheme,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered', // 🎯 Centrado en la vista de Storybook
    },
};

export default meta;
type Story = StoryObj<typeof ButtonToggleTheme>;

export const Default: Story = {
    render: () => <ButtonToggleTheme />,
};
