import { spacing, typography, iconSize } from '@tokens';

export const sizeMap = {
    sm: {
        paddingX: spacing.sm,
        paddingY: spacing.xs,
        gap: spacing.sm,                   // para íconos, label, etc.
        fontSize: typography.fontSize.sm,  // 14px
        icon: iconSize.sm,                 // 16px
        switch: {
            width: '32px',
            height: '16px',
        },
    },
    md: {
        paddingX: spacing.md,
        paddingY: spacing.sm,
        gap: spacing.md,                   // para íconos, label, etc.
        fontSize: typography.fontSize.md,  // 16px
        icon: iconSize.md,                 // 20px
        switch: {
            width: '40px',
            height: '20px',
        },
    },
    lg: {
        paddingX: spacing.lg,
        paddingY: spacing.md,
        gap: spacing.lg,                   // para íconos, label, etc.
        fontSize: typography.fontSize.lg,  // 18px
        icon: iconSize.lg,                 // 24px
        switch: {
            width: '48px',
            height: '24px',
        },
    },
} as const;
