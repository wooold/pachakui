// 📁 src/components/layout/Section.tsx

import React, { ElementType } from 'react';
import { useTheme } from '@/context/ThemeProvider'; // 🎯 Hook correcto
import { colors } from '@/tokens/theme/colors'; // 🎨 Paleta de colores
import { spacing } from '@/tokens/theme/spacing'; // 📏 Tokens de spacing
import { fontSizes, fontWeights } from '@/tokens/theme/typography'; // ✍️ Tokens tipográficos

function generateIdFromTitle(title: string) {
    return title.toLowerCase().replace(/\s+/g, '-');
}

type SectionProps = {
    title: string;
    children: React.ReactNode;
    as?: ElementType;
};

export function Section({ title, children, as: Tag = 'h2' }: SectionProps) {
    const { mode } = useTheme();
    const id = generateIdFromTitle(title);

    return (
        <section
            id={id}
            style={{
                marginBottom: spacing['3xl'],
                color: colors[mode].text.primary, // ✅ Color aplicado a toda la sección
            }}
        >
            <Tag
                style={{
                    fontSize: fontSizes.lg,
                    fontWeight: fontWeights.semibold,
                    marginBottom: spacing.lg,
                    // 🎯 Aquí no repetimos color porque ya hereda del <section>
                }}
            >
                {title}
            </Tag>
            {children}
        </section>
    );
}
