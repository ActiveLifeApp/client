import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import AuthForm from './AuthForm';

export default {
  title: 'Components/Molecules/AuthForm',
  component: AuthForm,
} as Meta;

export const Primary: React.FC<{}> = () => <AuthForm />;
