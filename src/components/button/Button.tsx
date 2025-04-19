import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    label: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  };

// 🎨 Variantes con clases Tailwind usando colores extendidos desde tailwind.config.js
const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md',
  {
    variants: {
      variant: {
        primary: 'bg-brand-primary text-white border border-brand-primary hover:bg-brand-primary/90',
        secondary: 'bg-white text-brand-primary border border-brand-primary hover:bg-brand-primary/5',
        ghost: 'bg-transparent text-brand-primary border border-transparent hover:bg-brand-primary/5',
      },
      size: {
        sm: 'text-sm px-4 py-2 gap-2',
        md: 'text-base px-6 py-3 gap-3',
        lg: 'text-lg px-8 py-4 gap-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export const Button = ({
  label,
  iconLeft,
  iconRight,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {iconLeft && <span className="inline-flex mr-2">{iconLeft}</span>}
      <span>{label}</span>
      {iconRight && <span className="inline-flex ml-2">{iconRight}</span>}
    </button>
  );
};
