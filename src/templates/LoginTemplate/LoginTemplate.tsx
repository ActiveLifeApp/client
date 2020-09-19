import React from 'react';

import { Typography } from 'components';
import {
  StyledWrapper,
  InnerWrapper,
  StyledButtonLogin,
  StyledButtonLink,
  StyledButtonWrapper,
  StyledHeader,
  StyledHeading,
  StyledLogo,
  StyledParagraph,
  StyledSlider,
} from './LoginTemplate.styled';

export interface Props {
  viewType: 'login' | 'registration';
  changeFn: () => void;
}

const LoginTemplate: React.FC<Props> = ({ children, viewType, changeFn }) => {
  return (
    <StyledWrapper>
      <StyledSlider />
      <InnerWrapper>
        <StyledHeader>
          <StyledLogo />
          <StyledButtonLink onClick={changeFn}>
            <>
              {viewType === 'login' && (
                <Typography type="paragraph" variant="p2">
                  Dont&apos;t have an account?&nbsp;
                </Typography>
              )}
              {viewType === 'login' ? 'Sign Up' : 'Sign In'}
            </>
          </StyledButtonLink>
        </StyledHeader>
        <div>
          <StyledHeading type="heading" variant="h3">
            {viewType === 'login' ? 'Sign In' : 'Sign Up'}
          </StyledHeading>
          {viewType === 'registration' && (
            <StyledParagraph type="paragraph" variant="p3">
              Create your account and change your life.
            </StyledParagraph>
          )}
        </div>
        <StyledButtonWrapper>
          <StyledButtonLogin icon="google" />
          <StyledButtonLogin icon="facebook" />
        </StyledButtonWrapper>
        {children}
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default LoginTemplate;
