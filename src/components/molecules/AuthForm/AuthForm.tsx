import React from 'react';

import { Input } from 'components';
import { StyledForm, StyledCheckbox, StyledButton } from './AuthForm.styled';
import { AuthFormProps } from './AuthForm.model';

const AuthForm: React.FC<AuthFormProps> = ({ viewType }) => (
  <StyledForm>
    <Input type="text" label="Email" name="email" id="email" />
    <Input type="passowrd" label="Password" name="password" id="password" />
    {viewType === 'registration' && (
      <Input type="passowrd" label="Repeat password" name="repeatPassword" id="repeatPassword" />
    )}
    <StyledCheckbox
      label="I accept the Privacy Policy, Cookies and Terms."
      name="policyAccept"
      id="policyAccept"
    />
    <StyledButton type="submit">{viewType === 'login' ? 'Sign In' : 'Sign up'}</StyledButton>
  </StyledForm>
);

export default AuthForm;
