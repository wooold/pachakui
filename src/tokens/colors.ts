import { primitives } from '@tokens/colors-primitives';

export const colors = {
  brand: {
<<<<<<< Updated upstream
    primary: '#4887fb', // azul Pachakui
=======
    primary: primitives.blue500,
>>>>>>> Stashed changes
  },

  neutral: {
    white: primitives.white,
    soft: primitives.gray50,
    background: primitives.gray100,
    border: primitives.gray200,
    muted: primitives.gray400,
  },

  text: {
<<<<<<< Updated upstream
    primary: '#222f3e',   // charcoal
    secondary: '#4b5563', // graphite
    muted: '#9ca3af',     // gris más suave
  },

  // 🛡️ Feedback visual del sistema
=======
    primary: primitives.black,
    muted: primitives.gray400,
  },

>>>>>>> Stashed changes
  feedback: {
    error: primitives.red500,
    success: primitives.green500,
  },

  control: {
    on: primitives.blue500,        // mismo que brand.primary
    off: primitives.gray300,       // mejor contraste para apagado
    knob: primitives.white,
    disabled: primitives.gray100,
  },

  transparent: primitives.transparent,
};
