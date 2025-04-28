// 📁 src/components/button/stories/ButtonGroup.stories.tsx

import React from 'react';
import { Button } from '../Button';
import type { Meta, StoryObj } from '@storybook/react';
import { useTheme } from '@context/ThemeProvider'; // ✅ Detectamos el tema (light/dark)

const meta: Meta = {
    title: 'Components/ButtonGroup',
    component: Button,
};

export default meta;
type Story = StoryObj;

/**
 * 🎛️ Grupo de botones en todas sus variantes visuales
 * ✅ Se adapta al cambio de tema
 */
export const MixedGroup: Story = {
    render: () => {
        const { mode } = useTheme();
        return (
            <div style={{ display: 'flex', gap: '16px' }}>
                <Button variant="primary">Guardar</Button>
                <Button variant="secondary">Cancelar</Button>
            </div>
        );
    },
};

/**
 * 🧯 Grupo con todos los botones deshabilitados
 * ✅ Útil para probar estados de "bloqueo"
 */
export const DisabledGroup: Story = {
    render: () => {
        const { mode } = useTheme();
        return (
            <div style={{ display: 'flex', gap: '16px' }}>
                <Button variant="primary" disabled>
                    Guardar
                </Button>
                <Button variant="secondary" disabled>
                    Cancelar
                </Button>
            </div>
        );
    },
};

/**
 * ⏳ Grupo en estado de carga (loading)
 */
export const LoadingGroup: Story = {
    render: () => {
        const { mode } = useTheme();
        return (
            <div style={{ display: 'flex', gap: '16px' }}>
                <Button variant="primary" loading>
                    Cargando...
                </Button>
                <Button variant="secondary" loading>
                    Esperando...
                </Button>
            </div>
        );
    },
};
