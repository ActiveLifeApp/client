import React from 'react';
import styled from 'styled-components';
import {
  Logo,
  ButtonLogin,
  Typography,
  ButtonLink,
  Input,
  Checkbox,
  Button,
  Slider,
} from 'components';

const StyledWrapper = styled.div`
  padding: 20px;

  ${({ theme: { devices } }) => devices.tablet} {
    padding: 40px;
  }

  ${({ theme: { devices } }) => devices.tabletL} {
    padding: 0;
    display: flex;
  }
`;

const InnerWrapper = styled.div`
  ${({ theme: { devices } }) => devices.tabletL} {
    padding: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
`;

const StyledLogo = styled(Logo)`
  ${({ theme: { devices } }) => devices.tabletL} {
    display: none;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme: { devices } }) => devices.tabletL} {
    justify-content: flex-end;
  }
`;

const StyledHeading = styled(Typography)`
  margin: 48px 0 20px;
  text-align: center;
  ${({ theme: { devices } }) => devices.tabletL} {
    margin: 58px 0 20px;
  }
  ${({ theme: { devices } }) => devices.desktop} {
    margin: 68px 0 20px;
  }
  ${({ theme: { devices } }) => devices.desktopFHD} {
    margin: 88px 0 20px;
  }
`;

const StyledParagraph = styled(Typography)`
  text-align: center;
`;

const StyledButtonWrapper = styled.div`
  margin: 20px 0 30px;
  display: flex;
  justify-content: center;
`;

const StyledButtonLogin = styled(ButtonLogin)`
  margin-right: 20px;
`;

const StyledCheckbox = styled(Checkbox)`
  margin: 10px;
`;

const StyledButton = styled(Button)`
  margin: 58px auto;
`;

const StyledForm = styled.form`
  ${({ theme: { devices } }) => devices.tablet} {
    width: 65%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  ${({ theme: { devices } }) => devices.desktop} {
    width: 40%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

const StyledSlider = styled(Slider)`
  display: none;
  ${({ theme: { devices } }) => devices.tabletL} {
    display: block;
  }
`;

export interface Props {}

const LoginTemplate: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <StyledSlider />
      <InnerWrapper>
        <StyledHeader>
          <StyledLogo />
          <ButtonLink>Sign In</ButtonLink>
        </StyledHeader>
        <div>
          <StyledHeading type="heading" variant="h3">
            Sign Up
          </StyledHeading>
          <StyledParagraph type="paragraph" variant="p3">
            Create your account and change your life.
          </StyledParagraph>
        </div>
        <StyledButtonWrapper>
          <StyledButtonLogin icon="google" />
          <StyledButtonLogin icon="facebook" />
        </StyledButtonWrapper>
        <StyledForm>
          <Input type="text" label="Email" name="email" id="email" />
          <Input type="passowrd" label="Password" name="password" id="password" />
          <Input
            type="passowrd"
            label="Repeat password"
            name="repeatPassword"
            id="repeatPassword"
          />
          <StyledCheckbox
            label="I accept the Privacy Policy, Cookies and Terms."
            name="policyAccept"
            id="policyAccept"
          />
          <StyledButton type="submit">Sign up</StyledButton>
        </StyledForm>
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default LoginTemplate;
