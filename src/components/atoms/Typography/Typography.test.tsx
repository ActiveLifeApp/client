import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import Typography from './Typography';

const renderTypography = (type: string, variant: string) => {
  const utils = render(
    <ThemeProvider theme={theme}>
      <Typography type={type} variant={variant}>
        example
      </Typography>
    </ThemeProvider>,
  );
  const typography = utils.getByText(/example/i);

  return { ...utils, typography };
};

describe('Typography component', () => {
  test('h1 is rendered', () => {
    const { typography } = renderTypography('heading', 'h1');

    expect(typography).toBeInTheDocument();
  });

  test('h2 is rendered', () => {
    const { typography } = renderTypography('heading', 'h2');

    expect(typography).toBeInTheDocument();
  });

  test('h3 is rendered', () => {
    const { typography } = renderTypography('heading', 'h3');

    expect(typography).toBeInTheDocument();
  });

  test('h4 is rendered', () => {
    const { typography } = renderTypography('heading', 'h4');

    expect(typography).toBeInTheDocument();
  });

  test('h5 is rendered', () => {
    const { typography } = renderTypography('heading', 'h5');

    expect(typography).toBeInTheDocument();
  });

  test('h6 is rendered', () => {
    const { typography } = renderTypography('heading', 'h6');

    expect(typography).toBeInTheDocument();
  });

  test('p1 is rendered', () => {
    const { typography } = renderTypography('paragraph', 'p1');

    expect(typography).toBeInTheDocument();
  });

  test('p2 is rendered', () => {
    const { typography } = renderTypography('paragraph', 'p2');

    expect(typography).toBeInTheDocument();
  });

  test('p3 is rendered', () => {
    const { typography } = renderTypography('paragraph', 'p3');

    expect(typography).toBeInTheDocument();
  });
});
