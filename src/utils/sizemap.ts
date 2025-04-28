// 📁 src/utils/sizemap.ts

/**
 * 🎛️ sizeMap
 * Mapea tamaños visuales por escala (sm, md, lg) para usar en componentes.
 */

import { spacing } from '@/tokens/spacing';
import { fontSizes } from '@/tokens/typography';
import { iconSize } from '@/tokens/iconSize';
import { borders } from '@/tokens/borders';

export const sizeMap = {
    sm: {
        paddingX: spacing.smPlus,
        paddingY: spacing.xs,
        fontSize: fontSizes.sm,
        gap: spacing.sm,            // ✅ Ahora directamente spacing.sm (8px)
        iconSize: iconSize.sm,
        borderRadius: borders.radius.md,
        minHeight: '32px', // ✅ Agregado
    },
    md: {
        paddingX: spacing.md,
        paddingY: spacing.sm,
        fontSize: fontSizes.md,
        gap: spacing.sm,            // ✅ Igual aquí: 8px
        iconSize: iconSize.md,
        borderRadius: borders.radius.md,
        minHeight: '40px', // ✅ Agregado
    },
    lg: {
        paddingX: spacing.mdPlus,
        paddingY: spacing.sm,
        fontSize: fontSizes.lg,
        gap: spacing.sm,            // ✅ También 8px
        iconSize: iconSize.lg,
        borderRadius: borders.radius.md,
        minHeight: '48px', // ✅ Agregado
    },
};
