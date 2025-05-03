// 📁 src/components/tokens/TokenCard.tsx

import type { CSSProperties } from 'react';
import { spacing } from '@/tokens/theme/spacing/spacing';
import { fontSizes, fontWeights, fontFamilies } from '@/tokens/theme/typography/typography';
import { colors } from '@/tokens/theme/colors/colors';
import { borders } from '@/tokens/theme/borders/borders';
import { Button } from '@/components/button/Button';

type ThemeMode = 'light' | 'dark';

type TokenCardProps = {
    token: string;
    value: string;
    variable?: string; // var(--token-name) → opcional, si no existe no se muestra la sección
    previewStyle?: CSSProperties; // estilos para preview visual (ej. backgroundColor, boxShadow)
    previewText?: string; // si se pasa, se renderiza como texto en vez de bloque visual
    mode: ThemeMode;
    hideVariable?: boolean; // permite ocultar variable
    hideCopy?: boolean; // permite ocultar botón copiar
};

export const TokenCard = ({
    token,
    value,
    variable = '',
    previewStyle,
    previewText,
    mode,
    hideVariable = false,
    hideCopy = false,
}: TokenCardProps) => {
    const borderColor = colors[mode].border.subtle;
    const backgroundSurface = colors[mode].background.surface;
    const textMuted = colors[mode].text.muted;
    const textPrimary = colors[mode].text.primary;

    return (
        <div
            style={{
                border: `1px solid ${borderColor}`,
                borderRadius: borders.radius.md,
                padding: spacing.lg,
                backgroundColor: backgroundSurface,
                display: 'flex',
                flexDirection: 'column',
                gap: spacing.mdPlus,
            }}
        >
            {/* 🔷 Vista previa del token */}
            {previewText ? (
                <p
                    style={{
                        margin: 0,
                        color: textPrimary,
                        fontFamily: fontFamilies.sans,
                        ...previewStyle,
                    }}
                >
                    {previewText}
                </p>
            ) : (
                <div
                    style={{
                        height: '96px',
                        borderRadius: borders.radius.md,
                        backgroundColor: previewStyle?.backgroundColor ?? backgroundSurface, // ✅ Background reacciona dinámicamente
                        ...previewStyle,
                    }}
                />
            )}

            {/* 🏷 Nombre del token */}
            <span
                style={{
                    fontWeight: fontWeights.bold,
                    fontSize: fontSizes.sm,
                    color: textPrimary,
                }}
            >
                {token}
            </span>

            {/* 🎨 Valor del token */}
            <span
                style={{
                    fontSize: fontSizes.sm,
                    color: textMuted,
                    fontFamily: fontFamilies.mono,
                }}
            >
                {value}
            </span>

            {/* 🧪 Variable + botón copiar */}
            {!hideVariable && variable && (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontFamily: fontFamilies.mono,
                        fontSize: fontSizes.sm,
                        color: textMuted,
                    }}
                >
                    <span>{variable}</span>
                    {!hideCopy && (
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => navigator.clipboard.writeText(variable)}
                        >
                            Copiar
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};
