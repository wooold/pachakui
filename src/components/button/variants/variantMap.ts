// src/components/button/variantMap.ts

import { colors } from '@/tokens/theme/colors/colors';
import { shadows } from '@/tokens/theme/shadows/shadow';

/**
 * 🗺️ Mapeo visual de los estilos del botón (por variant y theme mode)
 */
export const buttonVariantMap = {
    primary: {
        light: {
            background: {
                default: colors.light.background.brand,
                hover: colors.light.background.brandHover,
                active: colors.light.background.brandActive,
                disabled: colors.light.background.disabled,
                loading: colors.light.background.disabled, // loading usa disabled
            },
            border: {
                default: 'transparent',
                hover: 'transparent',
                active: 'transparent',
                disabled: 'transparent',
                loading: 'transparent',
            },
            text: {
                default: colors.light.text.onBrand,
                hover: colors.light.text.onBrand,
                active: colors.light.text.onBrand,
                disabled: colors.light.text.onBrand,
                loading: colors.light.text.onBrand,
            },
            focusRing: shadows.focus,
        },
        dark: {
            background: {
                default: colors.dark.background.brand,
                hover: colors.dark.background.brandHover,
                active: colors.dark.background.brandActive,
                disabled: colors.dark.background.disabled,
                loading: colors.dark.background.disabled,
            },
            border: {
                default: 'transparent',
                hover: 'transparent',
                active: 'transparent',
                disabled: 'transparent',
                loading: 'transparent',
            },
            text: {
                default: colors.dark.text.onBrand,
                hover: colors.dark.text.onBrand,
                active: colors.dark.text.onBrand,
                disabled: colors.dark.text.disabled,
                loading: colors.dark.text.disabled,
            },
            focusRing: shadows.focus,
        },
    },
    secondary: {
        light: {
            background: {
                default: colors.light.background.surface,
                hover: colors.light.background.surface,
                active: colors.light.background.surface,
                disabled: colors.light.background.surface,
                loading: colors.light.background.surface,
            },
            border: {
                default: colors.light.border.brand,
                hover: colors.light.border.brandHover,
                active: colors.light.border.brandActive,
                disabled: colors.light.border.disabled,
                loading: colors.light.border.disabled,
            },
            text: {
                default: colors.light.text.brand,
                hover: colors.light.text.brandHover,
                active: colors.light.text.brandActive,
                disabled: colors.light.text.disabled,
                loading: colors.light.text.disabled,
            },
            focusRing: shadows.focus,
        },
        dark: {
            background: {
                default: colors.dark.background.surface,
                hover: colors.dark.background.surface,
                active: colors.dark.background.surface,
                disabled: colors.dark.background.surface,
                loading: colors.dark.background.surface,
            },
            border: {
                default: colors.dark.border.brand,
                hover: colors.dark.border.brandHover,
                active: colors.dark.border.brandActive,
                disabled: colors.dark.border.disabled,
                loading: colors.dark.border.disabled,
            },
            text: {
                default: colors.dark.text.brand,
                hover: colors.dark.text.brandHover,
                active: colors.dark.text.brandActive,
                disabled: colors.dark.text.disabled,
                loading: colors.dark.text.disabled,
            },
            focusRing: shadows.focus,
        },
    },
} as const;
