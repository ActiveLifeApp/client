import styled from 'styled-components';
import googleIcon from 'assets/icons/google.svg';
import facebookIcon from 'assets/icons/facebook.svg';
import { ButtonLoginProps } from './ButtonLogin.model';

const StyledButtonLogin = styled.button<ButtonLoginProps>`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background-image: url(${({ icon }) => (icon === 'facebook' ? facebookIcon : googleIcon)});
  background-repeat: no-repeat;
  background-position: center;
`;

export default StyledButtonLogin;
