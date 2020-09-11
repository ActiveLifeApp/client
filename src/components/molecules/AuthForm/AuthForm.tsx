import React from 'react';
import { Typography, Input, Button, ButtonLink } from 'components';
import { StyledWrapper, StyledForm } from './AuthForm.styled';

const AuthForm: React.FC<{}> = () => {
  return (
    <StyledWrapper>
      <Typography type="heading" variant="h2" margin="0 0 10px 0">
        Sign in
      </Typography>
      <Typography type="paragraph" variant="p2" margin="0 0 50px 0">
        Sign in to continue
      </Typography>
      <StyledForm>
        <Input type="text" label="Email" id="email" />
        <Input type="password" label="Password" id="password" margin="0 0 70px 0" />
        <Button type="submit" width="60%">
          Sign in
        </Button>
      </StyledForm>
      <Typography type="paragraph" variant="p3" align="center" margin="10px 0 0 0">
        Don’t have an account? <ButtonLink>Sign Up</ButtonLink>
      </Typography>
    </StyledWrapper>
  );
};

export default AuthForm;
