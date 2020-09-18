import React from 'react';
import { Typography, Input, ButtonLink } from 'components';
import {
  StyledWrapper,
  HeaderWrapper,
  FooterWrapper,
  StyledSubheading,
  StyledButton,
  StyledParagraph,
} from './AuthForm.styled';

const AuthForm: React.FC<{}> = () => (
  <StyledWrapper>
    <HeaderWrapper>
      <Typography type="heading" variant="h2">
        Sign in
      </Typography>
      <StyledSubheading type="paragraph" variant="p2">
        Sign in to continue
      </StyledSubheading>
    </HeaderWrapper>
    <form>
      <Input type="text" label="Email" id="email" />
      <Input type="password" label="Password" id="password" />
      <StyledButton type="submit">Sign in</StyledButton>
    </form>
    <FooterWrapper>
      <StyledParagraph type="paragraph" variant="p3">
        Don’t have an account?
      </StyledParagraph>
      <ButtonLink>Sign Up</ButtonLink>
    </FooterWrapper>
  </StyledWrapper>
);

export default AuthForm;
