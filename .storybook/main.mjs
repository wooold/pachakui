export default {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config) => {
    config.resolve.alias = {
      '@': new URL('../src', import.meta.url).pathname,
      '@components': new URL('../src/components', import.meta.url).pathname,
      '@form': new URL('../src/components/form', import.meta.url).pathname,
      '@tokens': new URL('../src/tokens', import.meta.url).pathname,
      '@icons': new URL('../src/icons', import.meta.url).pathname,
      '@utils': new URL('../src/utils', import.meta.url).pathname, // 🛠️ alias faltante
    };

    // ❌ Ya no necesitamos viteTsconfigPaths, evitamos conflicto con ESM/CJS
    return config;
  },
};
