// 📁 src/components/button/stories/ButtonGroup.stories.tsx

import React from 'react';
import { Button } from '../Button';
import type { Meta, StoryObj } from '@storybook/react';
import { useTheme } from '@context/ThemeProvider';
import { Container } from '@/components/layout/Container'; // ✅ Nuevo
import { Section } from '@/components/layout/Section'; // ✅ Nuevo

const meta: Meta = {
    title: 'Components/Buttons/ButtonGroup',
    component: Button,
};

export default meta;
type Story = StoryObj;

/* 🔵 Mixed Group */
export const MixedGroup: Story = {
    render: () => {
        const { mode } = useTheme();
        return (
            <Container>
                <Section title="Mixed Group">
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <Button variant="primary">Guardar</Button>
                        <Button variant="secondary">Cancelar</Button>
                    </div>
                </Section>
            </Container>
        );
    },
};

/* 🔵 Disabled Group */
export const DisabledGroup: Story = {
    render: () => {
        const { mode } = useTheme();
        return (
            <Container>
                <Section title="Disabled Group">
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <Button variant="primary" disabled>Guardar</Button>
                        <Button variant="secondary" disabled>Cancelar</Button>
                    </div>
                </Section>
            </Container>
        );
    },
};

/* 🔵 Loading Group */
export const LoadingGroup: Story = {
    render: () => {
        const { mode } = useTheme();
        return (
            <Container>
                <Section title="Loading Group">
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <Button variant="primary" loading>Cargando...</Button>
                        <Button variant="secondary" loading>Esperando...</Button>
                    </div>
                </Section>
            </Container>
        );
    },
};
