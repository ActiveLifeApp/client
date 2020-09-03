import styled from 'styled-components';
import avatarNone from 'assets/icons/avatarNone.svg';
import { AvatarProps } from './Avatar.model';

const StyledAvatar = styled.a<AvatarProps>`
  display: block;
  cursor: pointer;
  width: 68px;
  height: 68px;
  background-image: url(${({ avatarURL }) => avatarURL || avatarNone});
  background-size: cover;
  background-position: center;
`;

export default StyledAvatar;
