import styled from 'styled-components';
import { ButtonLoginProps } from './ButtonLogin.model';

const StyledButtonLogin = styled.button<ButtonLoginProps>`
  cursor: pointer;
  width: 48px;
  height: 48px;
  display: block;
  border: none;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  svg {
    margin: auto;
    width: 28px;
    height: 28px;
  }
`;

export default StyledButtonLogin;
