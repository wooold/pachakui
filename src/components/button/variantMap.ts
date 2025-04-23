/**
 * 🎨 variantMap.ts
 * Este archivo define los estilos visuales para cada variante de botón,
 * utilizando tokens semánticos desde `colors.ts`.
 * Permite mantener el `Button.tsx` limpio y centralizar decisiones visuales.
 */

import colors from '@/tokens/colors';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export const buttonVariants: Record<ButtonVariant, {
    background: string;
    color: string;
    border: string;
}> = {
    /**
     * 🔷 PRIMARY
     * Botón principal de acción (CTA).
     * Fondo con color primario, texto blanco, sin borde.
     */
    primary: {
        background: colors.primary.default,
        color: colors.text.onPrimary, // texto sobre fondo primario
        border: 'none',
    },

    /**
     * 🔲 SECONDARY
     * Botón alternativo o de soporte.
     * Fondo blanco o surface, borde azul, texto azul.
     */
    secondary: {
        background: colors.surface.base,
        color: colors.primary.default,
        border: `1px solid ${colors.primary.default}`,
    },

    /**
     * 👻 GHOST
     * Estilo minimal sin fondo ni borde.
     * Ideal para acciones secundarias o inline.
     */
    ghost: {
        background: 'transparent',
        color: colors.primary.default,
        border: 'none',
    },
};
