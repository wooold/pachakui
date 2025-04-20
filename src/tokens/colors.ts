import { primitives } from './colors-primitives';

export const colors = {
  brand: {
    primary: primitives.blue500,
  },

  neutral: {
    white: primitives.white,
    soft: primitives.gray50,
    background: primitives.gray100,
    border: primitives.gray200,
    muted: primitives.gray400,
  },

  text: {
    primary: primitives.black,
    muted: primitives.gray400,
    onPrimary: primitives.white,
    inverse: primitives.white, // 👈 agregar esto
  },

  feedback: {
    error: primitives.red500,
    success: primitives.green500,
  },

  control: {
    on: primitives.blue500,
    off: primitives.gray300,
    knob: primitives.white,
    disabled: primitives.gray100,
    default: primitives.blue500, // 👈 agregar esto
  },

  transparent: primitives.transparent,
};
