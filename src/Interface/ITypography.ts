


import * as React from 'react';
import { JSX } from 'react/jsx-runtime';

type TypographyVariant = 'Header' | 'Paragraph';

type SizeVariant = '7xl' | '6xl' | '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'base' | 'sm' | 'xs';

export default interface TypographyProps {
    className?: string;
    children: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
    size: SizeVariant;
    variant?: TypographyVariant;
}