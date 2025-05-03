// 📁 src/tokens/stories/PrimitivesColores.stories.tsx

import { Meta } from '@storybook/react';
import { useTheme } from '@/context/ThemeProvider';

// 🧩 Tokens
import { primitives } from '@/tokens/theme/colors/colors-primitives';
import { spacing } from '@/tokens/theme/spacing';
import { fontSizes, fontWeights, fontFamilies } from '@/tokens/theme/typography/typography';
import { colors } from '@/tokens/theme/colors/colors';

// 🧱 Componentes reutilizables
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { TokenCard } from '@/components/tokens/TokenCard';

export default {
    title: 'Foundations/Colors',
} as Meta;

/**
 * 🎨 Grupos de tokens de colores primitivos
 */
const colorGroups: { label: string; tokens: (keyof typeof primitives)[] }[] = [
    { label: 'Blues', tokens: ['blue50', 'blue100', 'blue200', 'blue300', 'blue400', 'blue500', 'blue600', 'blue700', 'blue800', 'blue900'] },
    { label: 'Deep Accent', tokens: ['indigo500'] },
    { label: 'Grays', tokens: ['gray0', 'gray50', 'gray100', 'gray200', 'gray300', 'gray400', 'gray500', 'gray600', 'gray700', 'gray800', 'gray900', 'gray950'] },
    { label: 'Feedback', tokens: ['green100', 'green500', 'blueInfo100', 'blueInfo500', 'yellow100', 'yellow500', 'red100', 'red500'] },
    { label: 'Accents', tokens: ['lilac500', 'horizon500', 'synkuyBlue', 'skyGradient'] },
    { label: 'Backgrounds & Surfaces (Light)', tokens: ['backgroundBase', 'surface', 'overlay'] },
    { label: 'Backgrounds & Surfaces (Dark)', tokens: ['backgroundDark', 'surfaceDark', 'overlayDark'] },
    { label: 'Text on dark', tokens: ['textOnDark', 'mutedOnDark'] },
    { label: 'Utility', tokens: ['transparent', 'current'] },
];

export const PrimitivesTokens: React.FC = () => {
    const { mode } = useTheme();

    return (
        <Container
            style={{
                backgroundColor: colors[mode].background.surface,
                color: colors[mode].text.primary,
                fontFamily: fontFamilies.sans,
            }}
        >
            {/* 🎯 Título principal usando Section para mantener consistencia */}
            <Section title="Color Primitives">
                {/* 🎨 Renderizamos cada grupo de tokens */}
                {colorGroups.map(({ label, tokens }) => (
                    <Section key={label} title={label}>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                                gap: spacing.lg,
                            }}
                        >
                            {tokens.map((token) => (
                                <TokenCard
                                    key={token}
                                    token={token}
                                    value={primitives[token]}
                                    variable={''} // No mostramos var() aquí para mantener simplicidad
                                    mode={mode}
                                    previewStyle={{
                                        backgroundColor: primitives[token],
                                    }}
                                />
                            ))}
                        </div>
                    </Section>
                ))}
            </Section>
        </Container>
    );
};
