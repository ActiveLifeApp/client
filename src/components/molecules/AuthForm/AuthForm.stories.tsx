import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import AuthForm from './AuthForm';

export default {
  title: 'Components/Molecules/AuthForm',
  component: AuthForm,
} as Meta;

export const Login: React.FC<{}> = () => <AuthForm viewType="login" />;
export const Registration: React.FC<{}> = () => <AuthForm viewType="registration" />;
