import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Button from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
} as Meta;

export const Primary: React.SFC<{}> = () => <Button>Button</Button>;
export const PrimaryDisabled: React.SFC<{}> = () => <Button disabled>Button</Button>;

export const Secondary: React.SFC<{}> = () => <Button secondary>Button</Button>;
export const SecondaryDisabled: React.SFC<{}> = () => (
  <Button secondary disabled>
    Button
  </Button>
);
