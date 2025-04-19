import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina clases condicionales (clsx) y resuelve conflictos de Tailwind (twMerge).
 * Ideal para variantes de componentes con `cva`.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(...inputs));
}
