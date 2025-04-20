<<<<<<< HEAD
import React from 'react';
<<<<<<< Updated upstream
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
=======
import React, { useState } from 'react';
import { colors, spacing, borders, typography, shadows, iconSize } from '@/tokens';
>>>>>>> origin/main

type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
};

<<<<<<< HEAD
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
=======
const sizeMap: Record<ButtonSize, {
  paddingY: string;
  paddingX: string;
  gap: string;
  icon: string;
  fontSize: string;
}> = {
  sm: {
    paddingY: spacing.sm,
    paddingX: spacing.md,
    gap: spacing.xs,
    icon: iconSize.sm,
    fontSize: typography.fontSize.sm,
  },
  md: {
    paddingY: spacing.smPlus,
    paddingX: spacing.mdPlus,
    gap: spacing.smPlus,
    icon: iconSize.sm,
    fontSize: typography.fontSize.base,
  },
  lg: {
    paddingY: spacing.md,
    paddingX: spacing.lg,
    gap: spacing.smPlus,
    icon: iconSize.lg,
    fontSize: typography.fontSize.lg,
  },
};
>>>>>>> origin/main

export const Button: React.FC<ButtonProps> = ({
<<<<<<< HEAD
<<<<<<< Updated upstream
  label,
=======
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
>>>>>>> origin/main
  iconLeft,
  iconRight,
  type = 'button',
}) => {
  const [isHovered, setHovered] = useState(false);
  const [isFocused, setFocused] = useState(false);
  const [isActive, setActive] = useState(false);

  const { paddingY, paddingX, gap, icon, fontSize } = sizeMap[size];

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${paddingY} ${paddingX}`,
    borderRadius: borders.radius.md,
    fontWeight: typography.fontWeight.medium,
    fontSize: fontSize,
    lineHeight: typography.lineHeight.base,
    transition: 'all 0.2s ease-in-out',
    cursor: disabled ? 'not-allowed' : 'pointer',
    userSelect: 'none',
    border: '1px solid',
    outline: 'none',
  };

  const variantStyles = {
    primary: {
      backgroundColor: colors.brand.primary,
      color: colors.text.onPrimary,
      borderColor: colors.brand.primary,
    },
    secondary: {
      backgroundColor: colors.background.base,
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
      backgroundColor: colors.brand.hover,
      borderColor: colors.brand.hover,
    },
    secondary: {
      backgroundColor: colors.neutral.soft,
      borderColor: colors.brand.primary,
    },
    ghost: {
      backgroundColor: colors.neutral.soft,
    },
  };

  const activeStyles = {
    primary: {
      backgroundColor: colors.brand.active,
      borderColor: colors.brand.active,
    },
    secondary: {
      backgroundColor: colors.neutral.border,
    },
    ghost: {
      backgroundColor: colors.neutral.border,
    },
  };

  const combinedStyle: React.CSSProperties = {
    ...baseStyle,
    ...variantStyles[variant],
    ...(isHovered && !disabled ? hoverStyles[variant] : {}),
    ...(isActive && !disabled ? activeStyles[variant] : {}),
    ...(isFocused && !disabled ? { boxShadow: shadows.focus } : {}),
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={combinedStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setActive(false);
      }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
<<<<<<< HEAD
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
=======
      {iconLeft && (
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: icon,
          height: icon,
          marginRight: gap,
          flexShrink: 0,
        }}>
          {iconLeft}
        </span>
      )}
      {children}
      {iconRight && (
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: icon,
          height: icon,
          marginLeft: gap,
          flexShrink: 0,
        }}>
          {iconRight}
        </span>
      )}
>>>>>>> origin/main
    </button>
  );
};
