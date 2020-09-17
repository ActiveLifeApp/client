import React from 'react';
import { render } from '@testing-library/react';
import avatarPerson from 'assets/icons/avatarPerson.svg';
import Avatar from './Avatar';

const renderAvatar = (avatarURL?: string) => {
  const utils = render(<Avatar avatarURL={avatarURL} />);
  const avatar = utils.getByTestId('avatar');

  return { ...utils, avatar };
};

describe('Avatar component', () => {
  test('is displayed as a default component', () => {
    const { avatar } = renderAvatar();

    expect(avatar).toBeInTheDocument();
  });
  test('is displayed with avatarURL', () => {
    const { avatar } = renderAvatar(avatarPerson);

    expect(avatar).toBeInTheDocument();
  });
});
