import React from 'react';
import { StyledPrimaryButton, StyledSecondaryButton } from './Button.styled';
import { ButttonProps } from './Button.model';

const Button: React.FC<ButttonProps> = ({ children, disabled, secondary }) => {
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
