import React from 'react';
import { AvatarProps } from './Avatar.model';
import StyledAvatar from './Avatar.styled';

const ButtonLink: React.FC<AvatarProps> = ({ avatarURL }) => {
  return <StyledAvatar avatarURL={avatarURL} />;
};

export default ButtonLink;
