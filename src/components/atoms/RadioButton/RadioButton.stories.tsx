import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import RadioButton from './RadioButton';

export default {
  title: 'Components/Atoms/RadioButton',
  component: RadioButton,
} as Meta;

export const Primary: React.FC<{}> = () => (
  <RadioButton label="radiobutton" name="example" id="example" />
);
