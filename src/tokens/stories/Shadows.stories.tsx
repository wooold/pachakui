// 📁 src/tokens/stories/Shadows.stories.tsx

import { Meta } from '@storybook/react';
import { useTheme } from '@/context/ThemeProvider';
import { shadows } from '@/tokens/theme/shadows';
import { spacing } from '@/tokens/theme/spacing';
import { fontSizes, fontWeights, fontFamilies } from '@/tokens/theme/typography/typography';
import { colors } from '@/tokens/theme/colors/colors';
import { TokenCard } from '@/components/tokens/TokenCard';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section'; // ✅ Importamos Section

export default {
    title: 'Foundations/Shadows',
} as Meta;

export const ShadowTokens = () => {
    const { mode } = useTheme();
    const textColor = colors[mode].text.primary;
    const bgColor = colors[mode].background.surface;

    return (
        <Container
            style={{
                backgroundColor: bgColor,
                color: textColor,
                fontFamily: fontFamilies.sans,
            }}
        >
            {/* 🔠 Título principal */}
            <h2
                style={{
                    fontSize: fontSizes['2xl'],
                    fontWeight: fontWeights.bold,
                    marginBottom: spacing['2xl'],
                }}
            >
                Shadow Tokens
            </h2>

            {/* 🎯 Todo el grid vive dentro de un solo Section */}
            <Section title="Shadow Tokens">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
                        gap: spacing.xl,
                    }}
                >
                    {Object.entries(shadows).map(([token, value]) => (
                        <TokenCard
                            key={token}
                            token={token}
                            value={value}
                            variable={`--shadow-${token}`} // ✅ Variable visible y copiable
                            mode={mode}
                            previewStyle={{
                                boxShadow: value,
                            }}
                        />
                    ))}
                </div>
            </Section>
        </Container>
    );
};
