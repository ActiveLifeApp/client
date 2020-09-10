import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Switch from './Switch';

export default {
  title: 'Components/Atoms/Switch',
  component: Switch,
} as Meta;

export const Primary: React.SFC<{}> = () => <Switch label="Switch" name="example" id="example" />;
