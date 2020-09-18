import React from 'react';
import { GoogleIcon, FacebookIcon } from 'assets/icons';
import { ButtonLoginProps } from './ButtonLogin.model';
import StyledButtonLogin from './ButtonLogin.styled';

const ButtonLogin: React.FC<ButtonLoginProps> = ({ icon }) => {
  return (
    <StyledButtonLogin data-testid="button-login">
      {icon === 'facebook' ? <FacebookIcon /> : <GoogleIcon />}
    </StyledButtonLogin>
  );
};

export default ButtonLogin;
