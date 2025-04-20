import { spacing, typography, iconSize } from '@tokens';

export const sizeMap = {
    sm: {
        paddingX: spacing.md, // 16px
        paddingY: spacing.sm, // 8px
        gap: spacing.sm,      // 8px
        fontSize: typography.fontSize.sm, // 14px
        icon: iconSize.sm,    // 16px
        switch: {
            width: '32px',
            height: '16px',
        },
    },
    md: {
        paddingX: spacing.mdPlus, // 20px
        paddingY: spacing.smPlus, // 12px
        gap: spacing.smPlus,      // 12px
        fontSize: typography.fontSize.base, // 16px
        icon: iconSize.md,        // 20px
        switch: {
            width: '40px',
            height: '20px',
        },
    },
    lg: {
        paddingX: spacing.lg,  // 24px
        paddingY: spacing.md,  // 16px
        gap: spacing.md,       // 16px
        fontSize: typography.fontSize.lg, // 18px
        icon: iconSize.lg,     // 24px
        switch: {
            width: '48px',
            height: '24px',
        },
    },
};
