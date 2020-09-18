import React, { FC } from 'react';
import { Wrapper, StyledLogo } from './Logo.styled';
import { LogoProps } from './Logo.model';

const Logo: FC<LogoProps> = ({ className }) => (
  <Wrapper className={className}>
    <StyledLogo />
  </Wrapper>
);

export default Logo;
