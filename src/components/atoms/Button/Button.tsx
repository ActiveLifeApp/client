import React from 'react';
import { StyledPrimaryButton, StyledSecondaryButton } from './Button.styled';

export interface ButttonProps {
  disabled?: boolean;
  secondary?: boolean;
}

const Button: React.SFC<ButttonProps> = ({ children, disabled, secondary }) => {
  return (
    <>
      {secondary ? (
        <StyledSecondaryButton disabled={disabled}>{children}</StyledSecondaryButton>
      ) : (
        <StyledPrimaryButton disabled={disabled}>{children}</StyledPrimaryButton>
      )}
    </>
  );
};

export default Button;
