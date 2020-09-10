import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Typography from './Typography';

export default {
  title: 'Components/Atoms/Typography',
  component: Typography,
} as Meta;

export const H1: React.FC<{}> = () => (
  <Typography type="heading" variant="h1">
    Changing life is simple
  </Typography>
);
export const H2: React.FC<{}> = () => (
  <Typography type="heading" variant="h2">
    Changing life is simple
  </Typography>
);
export const H3: React.FC<{}> = () => (
  <Typography type="heading" variant="h3">
    Changing life is simple
  </Typography>
);
export const H4: React.FC<{}> = () => (
  <Typography type="heading" variant="h3">
    Changing life is simple
  </Typography>
);
export const H5: React.FC<{}> = () => (
  <Typography type="heading" variant="h5">
    Changing life is simple
  </Typography>
);
export const H6: React.FC<{}> = () => (
  <Typography type="heading" variant="h6">
    Changing life is simple
  </Typography>
);
export const P1: React.FC<{}> = () => (
  <Typography type="paragraph" variant="p1">
    Changing life is simple
  </Typography>
);
export const P2: React.FC<{}> = () => (
  <Typography type="paragraph" variant="p2">
    Changing life is simple
  </Typography>
);
export const P3: React.FC<{}> = () => (
  <Typography type="paragraph" variant="p3">
    Changing life is simple
  </Typography>
);
