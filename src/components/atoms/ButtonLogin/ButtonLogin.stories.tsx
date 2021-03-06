import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import ButtonLogin from './ButtonLogin';

export default {
  title: 'Components/Atoms/ButtonLogin',
  component: ButtonLogin,
} as Meta;

export const Google: React.FC<{}> = () => <ButtonLogin icon="google" />;
export const Facebook: React.FC<{}> = () => <ButtonLogin icon="facebook" />;
export const Default: React.FC<{}> = () => <ButtonLogin />;
