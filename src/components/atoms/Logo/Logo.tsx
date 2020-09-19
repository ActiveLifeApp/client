import React, { FC } from 'react';
import { Wrapper, StyledLogoPrimary, StyledLogoSecondary } from './Logo.styled';
import { LogoProps } from './Logo.model';

const Logo: FC<LogoProps> = ({ className, variant }) => (
  <Wrapper className={className}>
    {variant === 'primary' ? <StyledLogoPrimary /> : <StyledLogoSecondary />}
  </Wrapper>
);

Logo.defaultProps = {
  variant: 'primary',
};

export default Logo;
