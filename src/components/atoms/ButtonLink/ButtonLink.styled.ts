import styled from 'styled-components';
import { ButtonLinkProps } from './ButtonLink.model';

const StyledButtonLink = styled.a<ButtonLinkProps>`
  color: ${({ theme }) => theme.colors.primary20};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  font-size: ${({ theme }) => theme.sizes.xs};
  font-weight: ${({ theme }) => theme.weights.regular};
  transition: 0.3s;

  :hover {
    color: ${({ theme, disabled }) => (disabled ? theme.colors.primary20 : theme.colors.primary40)};
  }
`;

export default StyledButtonLink;
