import styled from 'styled-components';
import { StyledHeadingProps, StyledParagraphProps, VariantSizes } from './Typography.model';

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
  line-height: 1.6;
`;
