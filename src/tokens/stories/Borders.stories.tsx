// 📁 src/tokens/stories/Borders.stories.tsx
import { Meta } from '@storybook/react';
import { useTheme } from '@/context/ThemeProvider';

// 🎯 Tokens
import { borders } from '@/tokens/theme/borders';
import { spacing } from '@/tokens/theme/spacing';
import { colors } from '@/tokens/theme/colors/colors';
import { fontFamilies, fontSizes, fontWeights } from '@/tokens/theme/typography/typography';

// 🧩 Componentes
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { TokenCard } from '@/components/tokens/TokenCard';

export default {
    title: 'Foundations/Borders',
} as Meta;

export const BordersTokens = () => {
    const { mode } = useTheme();

    return (
        <Container
            style={{
                backgroundColor: colors[mode].background.surface,
                color: colors[mode].text.primary,
                fontFamily: fontFamilies.sans,
            }}
        >
            {/* 🔠 Título principal del story */}
            <h2
                style={{
                    fontSize: fontSizes['2xl'],
                    fontWeight: fontWeights.bold,
                    marginBottom: spacing['2xl'],
                }}
            >
                Border Tokens
            </h2>

            {/* 📚 Sección 1: Border Widths */}
            <Section title="Border Widths">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: spacing.lg,
                    }}
                >
                    {Object.entries(borders.width).map(([key, value]) => (
                        <TokenCard
                            key={`width-${key}`}
                            token={key}
                            value={value}
                            variable={`--border-width-${key}`}
                            mode={mode}
                            previewStyle={{
                                width: '80px',
                                height: '80px',
                                borderWidth: value,
                                borderStyle: 'solid',
                                borderColor: colors[mode].border.subtle,
                                borderRadius: borders.radius.md, // 🔵 Opcional: darle radio suave
                                backgroundColor: colors[mode].background.base,
                            }}
                        />
                    ))}
                </div>
            </Section>

            {/* 📚 Sección 2: Border Radius */}
            <Section title="Border Radius">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                        gap: spacing.lg,
                    }}
                >
                    {Object.entries(borders.radius).map(([key, value]) => (
                        <TokenCard
                            key={`radius-${key}`}
                            token={key}
                            value={value}
                            variable={`--border-radius-${key}`}
                            mode={mode}
                            previewStyle={{
                                width: '80px',
                                height: '80px',
                                backgroundColor: colors[mode].background.base,
                                border: `1px solid ${colors[mode].border.subtle}`,
                                borderRadius: value,
                            }}
                        />
                    ))}
                </div>
            </Section>
        </Container>
    );
};
