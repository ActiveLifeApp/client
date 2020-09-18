import React from 'react';
import { StyledPrimaryButton, StyledSecondaryButton } from './Button.styled';
import { ButttonProps } from './Button.model';

const Button: React.FC<ButttonProps> = ({
  className,
  type,
  children,
  disabled,
  secondary,
  ...props
}) => {
  return (
    <>
      {secondary ? (
        <StyledSecondaryButton
          className={className}
          type={type}
          disabled={disabled}
          data-testid="secondary"
          {...props}
        >
          {children}
        </StyledSecondaryButton>
      ) : (
        <StyledPrimaryButton
          className={className}
          type={type}
          disabled={disabled}
          data-testid="primary"
          {...props}
        >
          {children}
        </StyledPrimaryButton>
      )}
    </>
  );
};

export default Button;
