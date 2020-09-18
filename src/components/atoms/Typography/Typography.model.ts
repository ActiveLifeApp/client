import React from 'react';

export interface TypographyProps {
  type: 'heading' | 'paragraph';
  variant: string;
  children: string;
  className?: string;
}

export interface StyledHeadingProps {
  variant: string;
  as: React.ElementType;
  className?: string;
}

export interface StyledParagraphProps {
  variant: string;
  className?: string;
}

export enum VariantSizes {
  'h1' = 'xxxl',
  'h2' = 'xxl',
  'h3' = 'xl',
  'h4' = 'l',
  'h5' = 'm',
  'h6' = 'xs',
  'p1' = 's',
  'p2' = 'xs',
  'p3' = 'xxs',
}