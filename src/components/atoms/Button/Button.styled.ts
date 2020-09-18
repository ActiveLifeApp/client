import styled, { css } from 'styled-components';
import { StyledButtonProps } from './Button.model';

export const StyledPrimaryButton = styled.button<StyledButtonProps>`
  display: block;
  width: 260px;
  height: 58px;
  border: none;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary20};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.sizes.xs};
  font-family: 'Poppins', sans-serif;
  font-weight: ${({ theme }) => theme.weights.regular};
  color: ${({ theme }) => theme.colors.white};
  transition: 0.3s;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary40};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.primary60};
      color: ${({ theme }) => theme.colors.primary40};

      :hover {
        background-color: ${({ theme }) => theme.colors.primary60};
      }
    `}
`;

export const StyledSecondaryButton = styled.button<StyledButtonProps>`
  display: block;
  width: 260px;
  height: 58px;
  border: 1px solid ${({ theme }) => theme.colors.primary20};
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.sizes.xs};
  font-family: 'Poppins', sans-serif;
  font-weight: ${({ theme }) => theme.weights.regular};
  color: ${({ theme }) => theme.colors.primary20};
  transition: 0.3s;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary20};
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      border-color: #fdece2;
      color: #fdece2;

      :hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: #fdece2;
      }
    `}
`;
