/**
 * 🎨 Design Tokens - Colors (Semantic Layer)
 * Mapea los primitives a roles de UI como text, background, border, feedback, etc.
 * Soporta múltiples temas: light, dark.
 */

import { primitives } from './colors-primitives'

type ColorRoles = {
  text: {
    primary: string
    muted: string
    inverse: string
    onPrimary: string
  }
  background: {
    base: string
    surface: string
    overlay: string
  }
  border: {
    subtle: string
    strong: string
  }
  feedback: {
    success: string
    info: string
    warning: string
    error: string
  }
  control: {
    default: string
    on: string
    off: string
    knob: string
    disabled: string
  }
  transparent: string
}

/** 🌞 Tema Light */
export const lightColors: ColorRoles = {
  text: {
    primary: primitives.gray900,
    muted: primitives.gray500,
    inverse: primitives.gray0,
    onPrimary: primitives.gray0,
  },
  background: {
    base: primitives.backgroundBase,
    surface: primitives.surface,
    overlay: primitives.overlay,
  },
  border: {
    subtle: primitives.gray200,
    strong: primitives.gray400,
  },
  feedback: {
    success: primitives.green500,
    info: primitives.blueInfo500,
    warning: primitives.yellow500,
    error: primitives.red500,
  },
  control: {
    default: primitives.blue500,
    on: primitives.blue500,
    off: primitives.gray300,
    knob: primitives.gray0,
    disabled: primitives.gray100,
  },
  transparent: primitives.transparent,
}

/** 🌙 Tema Dark */
export const darkColors: ColorRoles = {
  text: {
    primary: primitives.textOnDark,
    muted: primitives.mutedOnDark,
    inverse: primitives.gray900,
    onPrimary: primitives.gray0,
  },
  background: {
    base: primitives.backgroundDark,
    surface: primitives.surfaceDark,
    overlay: primitives.overlayDark,
  },
  border: {
    subtle: primitives.gray700,
    strong: primitives.gray500,
  },
  feedback: {
    success: primitives.green100,
    info: primitives.blueInfo100,
    warning: primitives.yellow100,
    error: primitives.red100,
  },
  control: {
    default: primitives.blue500,
    on: primitives.blue500,
    off: primitives.gray700,
    knob: primitives.gray900,
    disabled: primitives.gray800,
  },
  transparent: primitives.transparent,
}

export const colors = lightColors;