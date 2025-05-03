// 📁 src/components/layout/Container.tsx

import React from 'react';
import { spacing } from '@/tokens/theme/spacing/spacing';
import { breakpoints } from '@/tokens/theme/breakpoints/breakpoints';
import { fontFamilies } from '@/tokens/theme/typography/typography';
import { colors } from '@/tokens/theme/colors/colors';
import { useTheme } from '@/context/ThemeProvider';

/**
 * 📦 Container – Componente estructural estándar.
 * Centra y limita el ancho, aplica padding horizontal y fuente base.
 */
export const Container = ({
    children,
    style,
}: {
    children: React.ReactNode;
    style?: React.CSSProperties;
}) => {
    const { mode } = useTheme(); // ✅ Hook debe ir DENTRO del componente, nunca fuera

    return (
        <div
            style={{
                width: '100%',
                margin: '0 auto',
                padding: spacing['2xl'], // ✅ Padding tokenizado
                maxWidth: breakpoints.xl, // ✅ Limite de ancho usando token
                fontFamily: fontFamilies.sans, // ✅ Fuente base para todo
                backgroundColor: colors[mode].background.surface, // 🎨 Color de fondo automático por tema
                color: colors[mode].text.primary, // 🎨 Color de texto automático por tema
                ...style, // 🎯 Permite sobreescribir cualquier propiedad si es necesario
            }}
        >
            {children}
        </div>
    );
};
