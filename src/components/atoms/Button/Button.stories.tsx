import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Button from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
} as Meta;

export const Primary: React.FC<{}> = () => <Button>Button</Button>;
export const PrimaryDisabled: React.FC<{}> = () => <Button disabled>Button</Button>;

export const Secondary: React.FC<{}> = () => <Button secondary>Button</Button>;
export const SecondaryDisabled: React.FC<{}> = () => (
  <Button secondary disabled>
    Button
  </Button>
);
