import React from 'react';
import { ButtonLoginProps } from './ButtonLogin.model';
import StyledButtonLogin from './ButtonLogin.styled';

const ButtonLink: React.SFC<ButtonLoginProps> = ({ icon }) => {
  return <StyledButtonLogin icon={icon} />;
};

export default ButtonLink;
