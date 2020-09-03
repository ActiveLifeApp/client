import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

export const Primary: React.SFC<{}> = () => (
  <Checkbox label="checkbox" name="example" id="example" />
);
