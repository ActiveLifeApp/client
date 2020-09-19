import React from 'react';

import { ButtonLinkProps } from './ButtonLink.model';
import { StyledButtonLink, StyledLink } from './ButtonLink.styled';

const ButtonLink: React.FC<ButtonLinkProps> = ({ children, disabled, uppercase, onClick }) => {
  return (
    <>
      {onClick ? (
        <StyledButtonLink
          disabled={disabled}
          uppercase={uppercase}
          data-testid="button-link"
          onClick={onClick}
        >
          {children}
        </StyledButtonLink>
      ) : (
        <StyledLink uppercase={uppercase} data-testid="button-link">
          {children}
        </StyledLink>
      )}
    </>
  );
};

export default ButtonLink;
