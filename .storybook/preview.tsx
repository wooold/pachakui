// 📁 .storybook/preview.tsx

import type { Preview } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from '../src/context/ThemeProvider';
import { colors } from '../src/tokens/colors'; // 🎨 Tokens de colores PachakUI

// 🎯 Nuevo contexto para manejar el tema manualmente desde el Toolbar de Storybook
const withThemeProvider = (Story: any, context: any) => {
  return (
    <ThemeProvider themeFromStorybook={context.globals.theme}>
      <BackgroundUpdater />
      <Story {...context.args} />
    </ThemeProvider>
  );
};

// ✨ Actualiza el background de la página basado en el modo actual
const BackgroundUpdater = () => {
  const { mode } = useTheme();

  useEffect(() => {
    const body = document.querySelector('body');
    if (!body) return;

    const backgroundColor = colors[mode].background.surface;
    body.style.backgroundColor = backgroundColor;
  }, [mode]);

  return null;
};

const preview: Preview = {
  decorators: [withThemeProvider],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Tema global manual desde Storybook (override del system theme)',
      defaultValue: 'system', // 🎯 Ahora permitimos system como opción también
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'system', title: 'Sistema' }, // 🖥️ Nueva opción: usar preferencia del sistema operativo
          { value: 'light', title: 'Claro' },
          { value: 'dark', title: 'Oscuro' },
        ],
        showName: true,
      },
    },
  },
  parameters: {
    backgrounds: {
      disable: true, // ⛔️ No usamos fondo manual de Storybook
    },
  },
};

export default preview;
