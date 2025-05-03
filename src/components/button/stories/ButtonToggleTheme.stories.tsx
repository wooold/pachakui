// 📁 src/components/button/stories/ButtonToggleTheme.stories.tsx

'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { ButtonToggleTheme } from '../ButtonToggleTheme';
import { Container } from '@/components/layout/Container'; // ✅ Nuevo
import { Section } from '@/components/layout/Section'; // ✅ Nuevo

const meta: Meta<typeof ButtonToggleTheme> = {
    title: 'Components/Buttons/ButtonToggleTheme',
    component: ButtonToggleTheme,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ButtonToggleTheme>;

/* 🔵 Toggle Theme Button */
export const Default: Story = {
    render: () => (
        <Container>
            <Section title="Toggle Theme">
                <ButtonToggleTheme />
            </Section>
        </Container>
    ),
};
