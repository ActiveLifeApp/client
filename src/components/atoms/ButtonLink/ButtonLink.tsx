import React from 'react';
import { ButtonLinkProps } from './ButtonLink.model';
import StyledButtonLink from './ButtonLink.styled';

const ButtonLink: React.FC<ButtonLinkProps> = ({ children, disabled, uppercase }) => {
  return (
    <StyledButtonLink disabled={disabled} uppercase={uppercase} data-testid="button-link">
      {children}
    </StyledButtonLink>
  );
};

export default ButtonLink;
