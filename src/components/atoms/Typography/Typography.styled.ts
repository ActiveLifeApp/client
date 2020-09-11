import styled from 'styled-components';
import { StyledHeadingProps, StyledParagraphProps } from './Typography.model';

const variantSizes = {
  h1: 'xxxl',
  h2: 'xxl',
  h3: 'xl',
  h4: 'l',
  h5: 'm',
  h6: 'xs',
  p1: 's',
  p2: 'xs',
  p3: 'xxs',
};

export const StyledHeading = styled.h1<StyledHeadingProps>`
  font-weight: ${({ theme }) => theme.weights.bold};
  font-size: ${({ theme, variant }) => theme.sizes[variantSizes[variant]]};
  margin: ${({ margin }) => margin || '10px 0'};
  text-align: ${({ align }) => align || 'left'};
`;

export const StyledParagraph = styled.p<StyledParagraphProps>`
  font-weight: ${({ theme, variant }) =>
    variant === 'p1' ? theme.weights.light : theme.weights.regular};
  font-size: ${({ theme, variant }) => theme.sizes[variantSizes[variant]]};
  color: ${({ theme, variant }) =>
    variant === 'p1' ? theme.colors.black : theme.colors.neutral20};
  margin: ${({ margin }) => margin || '10px 0'};
  text-align: ${({ align }) => align || 'left'};
`;
