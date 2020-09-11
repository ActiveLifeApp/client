import styled from 'styled-components';
import { StyledHeadingProps, StyledParagraphProps } from './Typography.model';

enum VariantSizes {
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

export const StyledHeading = styled.h1<StyledHeadingProps>`
  font-weight: ${({ theme }) => theme.weights.bold};
  font-size: ${({ theme, variant }) =>
    theme.sizes[VariantSizes[variant as keyof typeof VariantSizes]]};
`;

export const StyledParagraph = styled.p<StyledParagraphProps>`
  font-weight: ${({ theme, variant }) =>
    variant === 'p1' ? theme.weights.light : theme.weights.regular};
  font-size: ${({ theme, variant }) =>
    theme.sizes[VariantSizes[variant as keyof typeof VariantSizes]]};
  color: ${({ theme, variant }) =>
    variant === 'p1' ? theme.colors.black : theme.colors.neutral20};
`;
