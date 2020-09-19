import styled from 'styled-components';
import { ButtonLinkProps } from './ButtonLink.model';

export const StyledButtonLink = styled.button<ButtonLinkProps>`
  cursor: pointer;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary20};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  font-size: ${({ theme }) => theme.sizes.xs};
  font-weight: ${({ theme }) => theme.weights.regular};
  transition: 0.3s;

  :hover {
    color: ${({ theme, disabled }) => (disabled ? theme.colors.primary20 : theme.colors.primary40)};
    outline: none;
  }
`;

export const StyledLink = styled.a<ButtonLinkProps>`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary20};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  font-size: ${({ theme }) => theme.sizes.xs};
  font-weight: ${({ theme }) => theme.weights.regular};
  transition: 0.3s;

  :hover {
    color: ${({ theme }) => theme.colors.primary40};
  }
`;
