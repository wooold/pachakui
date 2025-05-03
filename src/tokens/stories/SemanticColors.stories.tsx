// 📁 src/tokens/stories/SemanticColors.stories.tsx

import { Meta } from '@storybook/react';
import { useTheme } from '@/context/ThemeProvider';

// 🎨 Importación de tokens visuales
import { colors } from '@/tokens/theme/colors/colors';
import { spacing } from '@/tokens/theme/spacing';
import { fontFamilies } from '@/tokens/theme/typography/typography';

// 🧱 Componentes reutilizables
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { TokenCard } from '@/components/tokens/TokenCard';

export default {
    title: 'Foundations/Colors',
} as Meta;

/**
 * 🎨 Definimos grupos de colores semánticos
 */
const semanticColorGroups: { label: string; group: keyof typeof colors['light'] }[] = [
    { label: 'Text Colors', group: 'text' },
    { label: 'Background Colors', group: 'background' },
    { label: 'Border Colors', group: 'border' },
    { label: 'Feedback Colors', group: 'feedback' },
    { label: 'Control Colors', group: 'control' },
    { label: 'Transparency & Overlays', group: 'transparent' },
];

export const SemanticColors: React.FC = () => {
    const { mode } = useTheme();
    const themeColors = colors[mode];

    return (
        <Container
            style={{
                backgroundColor: themeColors.background.surface,
                color: themeColors.text.primary,
                fontFamily: fontFamilies.sans,
            }}
        >
            {/* 🔠 Título principal del story como Section */}
            <Section title="Semantic Colors">
                {/* 🎯 Renderizar cada grupo de tokens */}
                {semanticColorGroups.map(({ label, group }) => {
                    const groupTokens = themeColors[group] ?? {};

                    return (
                        <Section key={group} title={label}>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                                    gap: spacing.lg,
                                }}
                            >
                                {Object.entries(groupTokens).map(([tokenName, tokenValue]) => (
                                    <TokenCard
                                        key={`${group}.${tokenName}`}
                                        token={`${group}.${tokenName}`}
                                        value={tokenValue}
                                        variable={`--color-${group}-${tokenName}`} // ✅ Variable visible para copiar fácilmente
                                        mode={mode}
                                        previewStyle={{
                                            backgroundColor: tokenValue,
                                        }}
                                    />
                                ))}
                            </div>
                        </Section>
                    );
                })}
            </Section>
        </Container>
    );
};
