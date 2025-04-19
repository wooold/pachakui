import { borders, colors, spacing, shadows } from '@/tokens';
import { ReactNode } from 'react';

type CardProps = {
    children: ReactNode;
    padding?: keyof typeof spacing;
    shadow?: keyof typeof shadows;
    backgroundColor?: string;
};

export const Card = ({
    children,
    padding = 'md',
    shadow = 'md',
    backgroundColor = colors.neutral.white,
}: CardProps) => {
    return (
        <div
            style={{
                backgroundColor,
                padding: spacing[padding],
                borderRadius: borders.radius.lg,
                boxShadow: shadows[shadow],
            }}
        >
            {children}
        </div>
    );
};
