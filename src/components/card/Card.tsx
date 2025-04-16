import './Card.css';
import { ReactNode } from 'react';

export type CardProps = {
    children: ReactNode;
    shadow?: 'sm' | 'md' | 'lg';
    padding?: 'sm' | 'md' | 'lg';
    bordered?: boolean;
};

export const Card = ({
    children,
    shadow = 'md',
    padding = 'md',
    bordered = false,
}: CardProps) => {
    const classes = [
        'pachakui-card',
        `shadow-${shadow}`,
        `padding-${padding}`,
        bordered ? 'bordered' : '',
    ].join(' ');

    return <div className={classes}>{children}</div>;
};
