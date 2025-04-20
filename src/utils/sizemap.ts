import { spacing, typography, iconSize, borders } from '@tokens';

export const sizeMap = {
    sm: {
        paddingX: spacing.md,
        paddingY: spacing.sm,
        gap: spacing.sm,
        fontSize: typography.fontSize.sm,
        icon: iconSize.sm,
        borderRadius: borders.radius.md, // ✅ corregido aquí
        switch: { width: '32px', height: '16px' },
    },
    md: {
        paddingX: spacing.mdPlus,
        paddingY: spacing.smPlus,
        gap: spacing.smPlus,
        fontSize: typography.fontSize.base,
        icon: iconSize.md,
        borderRadius: borders.radius.md,
        switch: { width: '40px', height: '20px' },
    },
    lg: {
        paddingX: spacing.lg,
        paddingY: spacing.md,
        gap: spacing.md,
        fontSize: typography.fontSize.lg,
        icon: iconSize.lg,
        borderRadius: borders.radius.md,
        switch: { width: '48px', height: '24px' },
    },
};
