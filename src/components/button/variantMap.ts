import { colors } from '@/tokens/colors';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export const buttonVariants: Record<ButtonVariant, {
    background: string;
    color: string;
    border: string;
}> = {
    /**
     * 🟦 PRIMARY
     * Botón principal de acción (CTA).
     * Fondo con color primario, texto blanco, sin borde.
     */
    primary: {
        background: colors.control.default,
        color: colors.text.onPrimary,
        border: 'none',
    },

    /**
     * ⚪ SECONDARY
     * Botón alternativo o de soporte.
     * Fondo blanco o surface, borde azul, texto azul.
     */
    secondary: {
        background: colors.background.surface,
        color: colors.control.default,
        border: `1px solid ${colors.control.default}`,
    },

    /**
     * 👻 GHOST
     * Estilo minimal sin fondo ni borde.
     * Ideal para acciones secundarias o inline.
     */
    ghost: {
        background: 'transparent',
        color: colors.control.default,
        border: 'none',
    },
};
