import React from 'react';
import { ButtonLinkProps } from './ButtonLink.model';
import StyledButtonLink from './ButtonLink.styled';

const ButtonLink: React.SFC<ButtonLinkProps> = ({ children, disabled, uppercase }) => {
  return (
    <StyledButtonLink disabled={disabled} uppercase={uppercase}>
      {children}
    </StyledButtonLink>
  );
};

export default ButtonLink;
