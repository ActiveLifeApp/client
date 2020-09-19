import React from 'react';

import { ButtonLinkProps } from './ButtonLink.model';
import { StyledButtonLink, StyledLink } from './ButtonLink.styled';

const ButtonLink: React.FC<ButtonLinkProps> = ({
  className,
  children,
  disabled,
  uppercase,
  onClick,
}) => {
  return (
    <>
      {onClick ? (
        <StyledButtonLink
          className={className}
          disabled={disabled}
          uppercase={uppercase}
          data-testid="button-link"
          onClick={onClick}
        >
          {children}
        </StyledButtonLink>
      ) : (
        <StyledLink className={className} uppercase={uppercase} data-testid="button-link">
          {children}
        </StyledLink>
      )}
    </>
  );
};

export default ButtonLink;
