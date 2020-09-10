import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import ButtonLink from './ButtonLink';

export default {
  title: 'Components/Atoms/ButtonLink',
  component: ButtonLink,
} as Meta;

export const Primary: React.SFC<{}> = () => <ButtonLink>Button</ButtonLink>;
export const PrimaryDisabled: React.SFC<{}> = () => <ButtonLink disabled>Button</ButtonLink>;
export const PrimaryUppercase: React.SFC<{}> = () => <ButtonLink uppercase>Button</ButtonLink>;
