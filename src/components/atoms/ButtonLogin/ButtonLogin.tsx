import React from 'react';
import { GoogleIcon, FacebookIcon } from 'assets/icons';
import { ButtonLoginProps } from './ButtonLogin.model';
import StyledButtonLogin from './ButtonLogin.styled';

const ButtonLogin: React.FC<ButtonLoginProps> = ({ icon, className }) => {
  return (
    <StyledButtonLogin className={className} data-testid="button-login">
      {icon === 'facebook' ? <FacebookIcon /> : <GoogleIcon />}
    </StyledButtonLogin>
  );
};

export default ButtonLogin;
