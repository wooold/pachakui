/**
 * 📏 sizeMap.ts
 * Mapea tamaños visuales por escala (sm, md, lg) para usar en componentes.
 * Usa tokens desde spacing, fontSizes, iconSize, gap y borders con acceso correcto.
 */

import { spacing } from '@/tokens/spacing';
import { fontSizes } from '@/tokens/typography';
import { iconSize } from '@/tokens/iconSize';
import { gap } from '@/tokens/gap';
import { borders } from '@/tokens/borders';

export const sizeMap = {
    // 🟦 Tamaño pequeño
    sm: {
        paddingX: spacing.md,
        paddingY: spacing.sm,
        fontSize: fontSizes.sm,
        gap: gap.sm,
        iconSize: iconSize.sm,
        borderRadius: borders.radius.md, // ✅ corregido
    },

    // 🟩 Tamaño mediano (default)
    md: {
        paddingX: spacing.lg,
        paddingY: spacing.md,
        fontSize: fontSizes.md,
        gap: gap.md,
        iconSize: iconSize.md,
        borderRadius: borders.radius.md, // ✅ corregido
    },

    // 🟥 Tamaño grande
    lg: {
        paddingX: spacing.xl,
        paddingY: spacing.lg,
        fontSize: fontSizes.lg,
        gap: gap.lg,
        iconSize: iconSize.lg,
        borderRadius: borders.radius.lg, // ✅ corregido
    },
};
