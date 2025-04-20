import React from 'react';
<<<<<<< Updated upstream
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

// 🧠 Tokens importados desde el Design System
import { spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { colors } from '@/tokens/colors';
import { borders } from '@/tokens/border';
import { gap } from '@/tokens/gap';
import { iconSize } from '@/tokens/iconSize';

// 🧩 Tipos del botón
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    label: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  };

// 🎨 Variantes del botón
const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: `bg-[${colors.brand.primary}] text-white border-[${colors.brand.primary}]`,
        secondary: `bg-white text-[${colors.brand.primary}] border-[${colors.brand.primary}]`,
        ghost: `bg-transparent text-[${colors.brand.primary}] border-transparent`,
      },
      size: {
        sm: `${spacing.sm} ${spacing.xs}`,
        md: `${spacing.md} ${spacing.sm}`,
        lg: `${spacing.lg} ${spacing.md}`,
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);
=======
import { colors, spacing, borders, typography } from '@tokens';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  onClick?: () => void;
};
>>>>>>> Stashed changes

// 🧱 Componente principal
export const Button: React.FC<ButtonProps> = ({
<<<<<<< Updated upstream
  label,
  iconLeft,
  iconRight,
  variant,
  size,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {iconLeft && <span className="mr-[8px]">{iconLeft}</span>}
      <span>{label}</span>
      {iconRight && <span className="ml-[8px]">{iconRight}</span>}
=======
  children,
  variant = 'primary',
  disabled = false,
  onClick,
}) => {
  const paddingY = spacing.sm;
  const paddingX = spacing.md;
  const fontSize = typography.fontSize.md;

  const baseStyle: React.CSSProperties = {
    padding: `${paddingY} ${paddingX}`,
    borderRadius: borders.radius.md,
    fontWeight: typography.fontWeight.medium,
    fontSize,
    lineHeight: typography.lineHeight.base,
    transition: 'all 0.2s ease-in-out',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid',
    outline: 'none',
  };

  const variantStyles = {
    primary: {
      backgroundColor: colors.brand.primary,
      color: colors.neutral.white, // se corrigió desde text.onPrimary
      borderColor: colors.brand.primary,
    },
    secondary: {
      backgroundColor: colors.neutral.background, // corregido
      color: colors.brand.primary,
      borderColor: colors.brand.primary,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: colors.brand.primary,
      borderColor: 'transparent',
    },
  };

  const hoverStyles = {
    primary: {
      backgroundColor: colors.brand.primary,
    },
    secondary: {
      backgroundColor: colors.neutral.soft,
    },
    ghost: {
      backgroundColor: colors.neutral.soft,
    },
  };

  const style = {
    ...baseStyle,
    ...(variantStyles[variant]),
    ...(disabled ? { opacity: 0.5 } : {}),
  };

  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {children}
>>>>>>> Stashed changes
    </button>
  );
};
