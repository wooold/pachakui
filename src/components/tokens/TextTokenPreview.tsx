// 📁 src/components/tokens/TextTokenPreview.tsx
import { fontFamilies, fontSizes, fontWeights } from '@/tokens/theme/typography';
import { spacing } from '@/tokens/theme/spacing';
import { borders } from '@/tokens/theme/borders';
import { colors } from '@/tokens/theme/colors';

// 🎯 Tipado explícito para modo de tema
type ThemeMode = 'light' | 'dark';

// 🧩 Props del TextTokenPreview
type TextTokenPreviewProps = {
    name: string; // 🏷 Nombre del estilo (ej: heading3xl, bodySm, etc.)
    style: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
        letterSpacing: string;
        fontFamily: string;
    };
    mode: ThemeMode; // 🎯 Tema claro/oscuro recibido como prop
};

export const TextTokenPreview = ({ name, style, mode }: TextTokenPreviewProps) => {
    // 🎨 Paleta de colores dinámica según tema
    const borderColor = colors[mode].border.subtle;
    const textColor = colors[mode].text.primary;
    const labelColor = colors[mode].text.muted;
    const bgColor = colors[mode].background.surface; // 🔵 Preparado para fondo dinámico (por si quieres ajustar a futuro)

    return (
        <div
            style={{
                border: `${borders.width.thin} solid ${borderColor}`,
                borderRadius: borders.radius.lg,
                padding: spacing['2xl'],
                fontFamily: fontFamilies.sans,
                backgroundColor: bgColor,
            }}
        >
            {/* 📝 Muestra de texto renderizado con estilo dinámico */}
            <p
                style={{
                    ...style, // ✅ fontSize, fontWeight, lineHeight, etc.
                    color: textColor,
                }}
            >
                The quick brown fox jumps over the lazy dog.
            </p>

            {/* 📋 Tabla de propiedades del estilo */}
            <table
                style={{
                    width: '100%',
                    fontSize: fontSizes.sm,
                    marginTop: spacing.lg,
                    borderCollapse: 'collapse',
                }}
            >
                <thead>
                    <tr
                        style={{
                            color: labelColor,
                            borderTop: `${borders.width.thin} solid ${borderColor}`,
                            borderBottom: `${borders.width.thin} solid ${borderColor}`,
                        }}
                    >
                        <th style={{ fontWeight: fontWeights.regular, width: '16.6%', textAlign: 'left', paddingTop: spacing.smPlus, paddingBottom: spacing.smPlus }}>Name</th>
                        <th style={{ fontWeight: fontWeights.regular, width: '16.6%', textAlign: 'left', paddingTop: spacing.smPlus, paddingBottom: spacing.smPlus }}>fontSize</th>
                        <th style={{ fontWeight: fontWeights.regular, width: '16.6%', textAlign: 'left', paddingTop: spacing.smPlus, paddingBottom: spacing.smPlus }}>lineHeight</th>
                        <th style={{ fontWeight: fontWeights.regular, width: '16.6%', textAlign: 'left', paddingTop: spacing.smPlus, paddingBottom: spacing.smPlus }}>fontWeight</th>
                        <th style={{ fontWeight: fontWeights.regular, width: '16.6%', textAlign: 'left', paddingTop: spacing.smPlus, paddingBottom: spacing.smPlus }}>letterSpacing</th>
                        <th style={{ fontWeight: fontWeights.regular, width: '16.6%', textAlign: 'left', paddingTop: spacing.smPlus, paddingBottom: spacing.smPlus }}>fontFamily</th>
                    </tr>
                </thead>

                <tbody style={{ color: textColor }}>
                    <tr>
                        <td style={{ paddingTop: spacing.smPlus, fontWeight: fontWeights.semibold }}>{name}</td>
                        <td style={{ paddingTop: spacing.smPlus }}>{style.fontSize}</td>
                        <td style={{ paddingTop: spacing.smPlus }}>{style.lineHeight}</td>
                        <td style={{ paddingTop: spacing.smPlus }}>{style.fontWeight}</td>
                        <td style={{ paddingTop: spacing.smPlus }}>{style.letterSpacing || '–'}</td>
                        <td style={{ paddingTop: spacing.smPlus }}>{style.fontFamily || '–'}</td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
};
