import React from 'react';
import { StyledPrimaryButton, StyledSecondaryButton } from './Button.styled';
import { ButttonProps } from './Button.model';

const Button: React.FC<ButttonProps> = ({ children, disabled, secondary }) => {
  return (
    <>
      {secondary ? (
        <StyledSecondaryButton disabled={disabled} data-testid="secondary">
          {children}
        </StyledSecondaryButton>
      ) : (
        <StyledPrimaryButton disabled={disabled} data-testid="primary">
          {children}
        </StyledPrimaryButton>
      )}
    </>
  );
};

export default Button;
