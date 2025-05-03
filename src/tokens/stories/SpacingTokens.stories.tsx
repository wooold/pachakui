// 📁 src/tokens/stories/SpacingTokens.stories.tsx
import { Meta } from '@storybook/react';
import { useTheme } from '@/context/ThemeProvider';

// 🎯 Tokens
import { spacing } from '@/tokens/theme/spacing';
import { colors } from '@/tokens/theme/colors/colors';
import { fontFamilies, fontSizes, fontWeights } from '@/tokens/theme/typography/typography';

// 🧩 Componentes
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { TokenCard } from '@/components/tokens/TokenCard';

export default {
    title: 'Foundations/Spacing',
} as Meta;

export const SpacingTokens = () => {
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
                Spacing Tokens
            </h2>

            <Section title="Spacing Tokens">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: spacing.lg,
                    }}
                >
                    {Object.entries(spacing).map(([key, value]) => {
                        const numericValue = parseFloat(value);
                        const previewWidth = !isNaN(numericValue) ? `${numericValue}px` : '4px';

                        return (
                            <TokenCard
                                key={`spacing-${key}`}
                                token={key}
                                value={value}
                                variable={`--spacing-${key}`}
                                mode={mode}
                                previewStyle={{
                                    width: previewWidth,
                                    height: '12px',
                                    backgroundColor: colors[mode].background.brand,
                                    borderRadius: spacing.xs,
                                }}
                            />
                        );
                    })}
                </div>
            </Section>
        </Container>
    );
};
