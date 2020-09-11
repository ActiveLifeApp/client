import React from 'react';
import { StyledPrimaryButton, StyledSecondaryButton } from './Button.styled';
import { ButttonProps } from './Button.model';

const Button: React.FC<ButttonProps> = ({
  type,
  children,
  disabled,
  secondary,
  width,
  ...props
}) => {
  return (
    <>
      {secondary ? (
        <StyledSecondaryButton type={type} disabled={disabled} width={width} {...props}>
          {children}
        </StyledSecondaryButton>
      ) : (
        <StyledPrimaryButton type={type} disabled={disabled} width={width} {...props}>
          {children}
        </StyledPrimaryButton>
      )}
    </>
  );
};

export default Button;
