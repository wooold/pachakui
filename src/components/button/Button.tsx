import React, { useState } from 'react';
import { colors, spacing, borders, typography, shadows, iconSize } from '@/tokens';

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

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
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
    </button>
  );
};
