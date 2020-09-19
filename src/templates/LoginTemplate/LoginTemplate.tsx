import React from 'react';

import { ButtonLink } from 'components';
import {
  StyledWrapper,
  InnerWrapper,
  StyledButtonLogin,
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
          <ButtonLink onClick={changeFn}>{viewType === 'login' ? 'Sign In' : 'Sign Up'}</ButtonLink>
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
