import { colors } from '@tokens/colors';

export const buttonVariants = {
    primary: {
        backgroundColor: colors.control.default,
        color: colors.text.inverse,
        border: 'none',
    },
    secondary: {
        backgroundColor: colors.backgroundDefault, // 🔧 corregido aquí
        color: colors.control.default,
        border: `1px solid ${colors.control.default}`,
    },
    outline: {
        backgroundColor: 'transparent',
        color: colors.control.default,
        border: `1px solid ${colors.control.default}`,
    },
};
