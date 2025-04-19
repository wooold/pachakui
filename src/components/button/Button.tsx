import React from 'react';
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

// 🧱 Componente principal
export const Button: React.FC<ButtonProps> = ({
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
    </button>
  );
};
