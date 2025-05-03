// 📁 src/tokens/stories/Typography.stories.tsx
import { Meta } from '@storybook/react';
import { useTheme } from '@/context/ThemeProvider';

// 🎯 Importamos tokens visuales
import {
    textStyles,
    fontFamilies,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
} from '@/tokens/theme/typography/typography';
import { spacing } from '@/tokens/theme/spacing';
import { colors } from '@/tokens/theme/colors/colors';

// 🧩 Componentes reutilizables
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section'; // ✅ Usamos el Section oficial
import { TokenCard } from '@/components/tokens/TokenCard';
import { TextTokenPreview } from '@/components/tokens/TextTokenPreview';

export default {
    title: 'Foundations/Typography',
} as Meta;

export const TypographyTokens = () => {
    const { mode } = useTheme(); // 🎯 Detectamos tema actual (light/dark)

    // 🎯 Propiedades comunes para TokenCards de tipografía
    const tokenPreviewProps = {
        mode,
        hideVariable: true, // ❌ No mostramos variable
        hideCopy: true,     // ❌ No permitimos copiar en tokens de Typography
        previewText: 'The quick brown fox jumps over the lazy dog',
    };

    return (
        <Container
            style={{
                fontFamily: fontFamilies.sans, // ✅ Fuente base definida en tokens
            }}
        >
            {/* 🔠 Título principal del story */}
            <h2
                style={{
                    fontSize: fontSizes['2xl'],
                    fontWeight: fontWeights.bold,
                    marginBottom: spacing['2xl'],
                    color: colors[mode].text.primary,
                }}
            >
                Typography Tokens
            </h2>

            {/* 📚 Sección 1: Text Styles */}
            <Section title="Text Styles">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(none, 1fr))',
                        gap: spacing['2xl'],
                    }}
                >
                    {Object.entries(textStyles).map(([name, style]) => (
                        <TextTokenPreview key={name} name={name} style={style} mode={mode} />
                    ))}
                </div>
            </Section>

            {/* 📚 Sección 2: Font Sizes */}
            <Section title="Font Sizes">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: spacing['2xl'],
                    }}
                >
                    {Object.entries(fontSizes).map(([key, size]) => (
                        <TokenCard
                            key={key}
                            token={key}
                            value={`${size}`}
                            variable=""
                            previewStyle={{ fontSize: size }}
                            {...tokenPreviewProps}
                        />
                    ))}
                </div>
            </Section>

            {/* 📚 Sección 3: Font Weights */}
            <Section title="Font Weights">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: spacing['2xl'],
                    }}
                >
                    {Object.entries(fontWeights).map(([key, weight]) => (
                        <TokenCard
                            key={key}
                            token={key}
                            value={`${weight}`}
                            variable=""
                            previewStyle={{ fontWeight: weight }}
                            {...tokenPreviewProps}
                        />
                    ))}
                </div>
            </Section>

            {/* 📚 Sección 4: Line Heights */}
            <Section title="Line Heights">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: spacing['2xl'],
                    }}
                >
                    {Object.entries(lineHeights).map(([key, height]) => (
                        <TokenCard
                            key={key}
                            token={key}
                            value={`${height}`}
                            variable=""
                            previewStyle={{
                                lineHeight: height,
                                fontSize: fontSizes.md, // ✅ Para mejor visibilidad de línea
                            }}
                            previewText="This is a paragraph with line height applied. Add more text to flow naturally over multiple lines."
                            mode={mode}
                            hideVariable
                            hideCopy
                        />
                    ))}
                </div>
            </Section>

            {/* 📚 Sección 5: Letter Spacings */}
            <Section title="Letter Spacings">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: spacing['2xl'],
                    }}
                >
                    {Object.entries(letterSpacings).map(([key, spacingValue]) => (
                        <TokenCard
                            key={key}
                            token={key}
                            value={`${spacingValue}`}
                            variable=""
                            previewStyle={{ letterSpacing: spacingValue }}
                            {...tokenPreviewProps}
                        />
                    ))}
                </div>
            </Section>

            {/* 📚 Sección 6: Font Families */}
            <Section title="Font Families">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: spacing['2xl'],
                    }}
                >
                    {Object.entries(fontFamilies).map(([key, family]) => (
                        <TokenCard
                            key={key}
                            token={key}
                            value={family}
                            variable=""
                            previewStyle={{ fontFamily: family }}
                            previewText="The quick brown fox jumps over the lazy dog"
                            mode={mode}
                            hideVariable
                            hideCopy
                        />
                    ))}
                </div>
            </Section>
        </Container>
    );
};
