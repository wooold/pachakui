// 📁 src/tokens/colors.ts

import { primitives } from './colors-primitives'; // ✅ Importamos los primitivos

// 🎯 Estructura de colores separados por tema: light y dark
export const colors = {
  light: {
    text: {
      primary: primitives.gray900,
      muted: primitives.gray500,
      inverse: primitives.gray0,
      brand: primitives.blue500,
      brandHover: primitives.blue400,
      brandActive: primitives.blue600,
      onBrand: primitives.gray0,
      disabled: primitives.gray300,
    },
    background: {
      base: primitives.backgroundBase,
      surface: primitives.surface,
      overlay: primitives.overlay,
      brand: primitives.blue500,
      brandHover: primitives.blue400,
      brandActive: primitives.blue600,
      disabled: primitives.gray300,
    },
    border: {
      inverse: primitives.gray0,
      subtle: primitives.gray200,
      strong: primitives.gray400,
      brand: primitives.blue500,
      brandHover: primitives.blue400,
      brandActive: primitives.blue600,
      onBrand: primitives.gray0,
      disabled: primitives.gray300,
    },
    feedback: {
      success: primitives.green500,
      info: primitives.blueInfo500,
      warning: primitives.yellow500,
      error: primitives.red500,
    },
    control: {
      primary: primitives.blue500,
      off: primitives.gray300,
      knob: primitives.gray0,
      disabled: primitives.gray100,
    },
    transparent: primitives.transparent,
  },

  dark: {
    text: {
      primary: primitives.textOnDark,
      muted: primitives.mutedOnDark,
      inverse: primitives.gray900,
      brand: primitives.blue500,
      brandHover: primitives.blue400,
      brandActive: primitives.blue600,
      onBrand: primitives.gray0,
      disabled: primitives.gray600,
    },
    background: {
      base: primitives.backgroundDark,
      surface: primitives.surfaceDark,
      overlay: primitives.overlayDark,
      brand: primitives.blue800,
      brandHover: primitives.blue700,
      brandActive: primitives.blue900,
      disabled: primitives.gray800,
    },
    border: {
      inverse: primitives.gray0,
      subtle: primitives.gray600,
      strong: primitives.gray400,
      brand: primitives.blue500,
      brandHover: primitives.blue400,
      brandActive: primitives.blue600,
      onBrand: primitives.gray0,
      disabled: primitives.gray600,
    },
    feedback: {
      success: primitives.green100,
      info: primitives.blueInfo100,
      warning: primitives.yellow100,
      error: primitives.red100,
    },
    control: {
      primary: primitives.blue900,
      off: primitives.gray600,
      knob: primitives.gray700,
      disabled: primitives.gray800,
    },
    transparent: primitives.transparent,
  },
};
