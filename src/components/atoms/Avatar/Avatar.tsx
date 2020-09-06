import React from 'react';
import { AvatarProps } from './Avatar.model';
import StyledAvatar from './Avatar.styled';

const ButtonLink: React.SFC<AvatarProps> = ({ avatarURL }) => {
  return <StyledAvatar avatarURL={avatarURL} />;
};

export default ButtonLink;
