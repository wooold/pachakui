import type { Meta } from '@storybook/react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { useSystemTheme } from '@/context/useSystemTheme';
import { colors } from '@/tokens/theme/colors';
import { spacing } from '@/tokens/theme/spacing';
import { textStyles } from '@/tokens/theme/typography/typography';
import { borders } from '@/tokens/theme/borders';

const meta: Meta = {
  title: 'Foundations/Overview',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const TokensOverview = () => {
  const mode = useSystemTheme() as 'light' | 'dark';

  return (
    <Container>
      <Section title="PachakUI Tokens Overview">
        <h1 style={{ ...textStyles.heading2xl, marginBottom: spacing.lg }}>
          🌈 PachakUI Tokens
        </h1>
        <p style={{ ...textStyles.bodyLarge, marginBottom: spacing['2xl'] }}>
          Los tokens son los valores básicos que componen todo el sistema de diseño.
          Permiten crear componentes coherentes, adaptables y fáciles de mantener.
        </p>

        <hr
          style={{
            margin: `${spacing['2xl']} 0`,
            borderColor: colors[mode].border.subtle,
            borderWidth: borders.width.thin,
          }}
        />

        <h2 style={{ ...textStyles.headingXl, marginBottom: spacing.lg }}>
          💠 Categorías de Tokens
        </h2>

        <table
          role="table"
          style={{
            width: '100%', // Propuesta de pasar a una clase utilitaria
            borderCollapse: 'collapse', // Propuesta de pasar a token o utilitaria
            fontSize: textStyles.bodyLarge.fontSize,
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: 'left',
                  borderBottom: `${borders.width.thin} solid ${colors[mode].border.subtle}`,
                  paddingBottom: spacing.sm,
                }}
              >
                Categoría
              </th>
              <th
                style={{
                  textAlign: 'left',
                  borderBottom: `${borders.width.thin} solid ${colors[mode].border.subtle}`,
                  paddingBottom: spacing.sm,
                }}
              >
                Descripción
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Colors', desc: 'Paletas de texto, fondos, bordes, estados y superficies.' },
              { name: 'Spacing', desc: 'Controlan márgenes, paddings y espacios internos.' },
              { name: 'Typography', desc: 'Tamaños de texto, pesos de fuente y familias tipográficas.' },
              { name: 'Borders', desc: 'Radios de borde, anchos y estilos de bordes.' },
              { name: 'Shadows', desc: 'Sombras para jerarquías visuales y profundidad.' },
            ].map((item) => (
              <tr key={item.name}>
                <td style={{ padding: spacing.sm }}>
                  <strong>{item.name}</strong>
                </td>
                <td style={{ padding: spacing.sm }}>{item.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr
          style={{
            margin: `${spacing['2xl']} 0`,
            borderColor: colors[mode].border.subtle,
            borderWidth: borders.width.thin,
          }}
        />

        <h2 style={{ ...textStyles.headingXl, marginBottom: spacing.lg }}>
          🔗 Cómo importar un token
        </h2>
        <pre
          style={{
            background: colors[mode].background.base,
            color: colors[mode].text.primary,
            padding: spacing.lg,
            borderRadius: borders.radius.md,
            fontSize: textStyles.bodyLarge.fontSize,
            overflowX: 'auto',
          }}
        >
          <code style={{ color: colors[mode].text.primary }}>
            import &#123; spacing &#125; from '@/tokens/theme/spacing';
          </code>
        </pre>
      </Section>
    </Container>
  );
};
